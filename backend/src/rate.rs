//! GitHub rate limiting: https://developer.github.com/v3/rate_limit/

use chrono::{serde::ts_seconds, DateTime, TimeZone, Utc};
use reqwest::header::HeaderMap;
use serde::Deserialize;
use std::sync::atomic::{AtomicI64, Ordering};
use thiserror::Error;

/// Rate limit http header convertion error.
#[derive(Error, Debug)]
pub enum RateLimitError {
    #[error("header not found: {0}")]
    HeaderNotFound(&'static str),
    #[error("header is not valid utf8: {0}")]
    Utf8Error(#[from] reqwest::header::ToStrError),
    #[error("header value was not valid: {0}")]
    ParsingError(#[from] std::num::ParseIntError),
}

#[derive(Deserialize, Debug)]
pub struct Resources {
    pub core: Rate,
    pub search: Rate,
    pub graphql: Rate,
    pub integration_manifest: Rate,
}

#[derive(Deserialize, Debug)]
pub struct RateLimit {
    pub resources: Resources,
}

#[derive(Deserialize, Debug)]
pub struct Rate {
    pub limit: i64,
    pub remaining: AtomicI64,

    #[serde(with = "ts_seconds")]
    pub reset: DateTime<Utc>,
}

pub enum RateLimited {
    Decremented,
    Waited,
}

impl Rate {
    const X_RATELIMIT_LIMIT: &'static str = "X-RateLimit-Limit";
    const X_RATELIMIT_REMAINING: &'static str = "X-RateLimit-Remaining";
    const X_RATELIMIT_RESET: &'static str = "X-RateLimit-Reset";

    /// Decreament limit by one or delay async operation until reset datetime passes.
    /// If the time remaining is negative, this function waits zero seconds.
    pub async fn tick(&self) -> RateLimited {
        let now = Utc::now();
        // leaves ourselves 500 requests if limit is over 1000
        if self.limit > 1000 && self.remaining.load(Ordering::SeqCst) < 500 {
            match (self.reset - now).to_std() {
                Ok(duration) => {
                    let later = tokio::time::Instant::now() + duration;
                    tokio::time::delay_until(later).await;
                    RateLimited::Waited
                }

                // error occurs if duration is negative, which
                // just means we don't need to wait anymore.
                Err(_) => RateLimited::Waited,
            }
        } else {
            self.remaining
                .store(self.remaining.load(Ordering::SeqCst) - 1, Ordering::SeqCst);
            RateLimited::Decremented
        }
    }

    /// Reads `X-RateLimit-*` headers and packs them into a `Rate` struct.
    pub fn from_headers(h: &HeaderMap) -> Result<Self, RateLimitError> {
        fn get_parse(h: &HeaderMap, key: &'static str) -> Result<i64, RateLimitError> {
            use RateLimitError::*;
            Ok(h.get(key)
                .ok_or(HeaderNotFound(key))?
                .to_str()?
                .parse::<i64>()?)
        }
        let limit = get_parse(h, Self::X_RATELIMIT_LIMIT)?;
        let remaining = AtomicI64::new(get_parse(h, Self::X_RATELIMIT_REMAINING)?);
        let ts = get_parse(h, Self::X_RATELIMIT_RESET)?;
        let reset = Utc.timestamp(ts, 0);
        Ok(Self {
            limit,
            remaining,
            reset,
        })
    }
}
