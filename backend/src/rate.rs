//! GitHub rate limiting.

use chrono::{serde::ts_seconds, DateTime, TimeZone, Utc};
use reqwest::header::HeaderMap;
use serde::Deserialize;

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
    limit: i64,
    remaining: i64,

    #[serde(with = "ts_seconds")]
    reset: DateTime<Utc>,
}

impl Rate {
    const X_RATELIMIT_LIMIT: &'static str = "X-RateLimit-Limit";
    const X_RATELIMIT_REMAINING: &'static str = "X-RateLimit-Remaining";
    const X_RATELIMIT_RESET: &'static str = "X-RateLimit-Reset";

    // pub fn time_reset(&self) -> SystemTime {
    //     UNIX_EPOCH + Duration::from_secs(self.reset)
    // }

    /// Reads hearders for ratelimit.
    pub fn from_headers(h: &HeaderMap) -> Option<Self> {
        // NOTE: shouldn't this return a result?
        let get_parse = |key| h.get(key)?.to_str().ok()?.parse().ok();
        let limit = get_parse(Self::X_RATELIMIT_LIMIT)?;
        let remaining = get_parse(Self::X_RATELIMIT_REMAINING)?;
        let ts = get_parse(Self::X_RATELIMIT_RESET)?;
        let reset = Utc.timestamp(ts, 0);
        Some(Self {
            limit,
            remaining,
            reset,
        })
    }
}
