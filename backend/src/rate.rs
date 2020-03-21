//! GitHub rate limiting.

use anyhow::Result;
use chrono::{serde::ts_seconds, DateTime, TimeZone, Utc};
use reqwest::header::HeaderMap;
use serde::Deserialize;
use thiserror::Error;

#[derive(Error, Debug)]
enum RateLimitError {
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
    pub remaining: i64,

    #[serde(with = "ts_seconds")]
    pub reset: DateTime<Utc>,
}

impl Rate {
    const X_RATELIMIT_LIMIT: &'static str = "X-RateLimit-Limit";
    const X_RATELIMIT_REMAINING: &'static str = "X-RateLimit-Remaining";
    const X_RATELIMIT_RESET: &'static str = "X-RateLimit-Reset";

    // pub fn time_reset(&self) -> SystemTime {
    //     UNIX_EPOCH + Duration::from_secs(self.reset)
    // }

    /// Reads hearders for ratelimit.
    pub fn from_headers(h: &HeaderMap) -> Result<Self> {
        fn get_parse(h: &HeaderMap, key: &'static str) -> Result<i64> {
            use RateLimitError::*;
            Ok(h.get(key)
                .ok_or(HeaderNotFound(key))?
                .to_str()?
                .parse::<i64>()?)
        }
        let limit = get_parse(h, Self::X_RATELIMIT_LIMIT)?;
        let remaining = get_parse(h, Self::X_RATELIMIT_REMAINING)?;
        let ts = get_parse(h, Self::X_RATELIMIT_RESET)?;
        let reset = Utc.timestamp(ts, 0);
        Ok(Self {
            limit,
            remaining,
            reset,
        })
    }
}
