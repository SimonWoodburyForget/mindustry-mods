use crate::rate::{Rate, RateLimit};
use anyhow::Result;
use chrono::Utc;
use reqwest::{
    header::{HeaderMap, HeaderValue, AUTHORIZATION, USER_AGENT},
    Client,
};
use serde::Deserialize;
use tokio::time::delay_until;
use tokio::time::Instant;

#[derive(Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub enum Encoding {
    Base64,
}

#[derive(Deserialize, Debug)]
pub struct Contents {
    pub encoding: Encoding,
    pub content: String,
}

pub struct GitHub {
    client: Client,
    rate_limit: RateLimit,
}

impl GitHub {
    const RATE_LIMIT: &'static str = "https://api.github.com/rate_limit";

    pub async fn new(token: &str) -> Result<Self> {
        let mut headers = HeaderMap::new();
        headers.insert(AUTHORIZATION, HeaderValue::from_str(&token)?);
        headers.insert(USER_AGENT, HeaderValue::from_str("Mindustry-Mods-Backend")?);

        let client = reqwest::Client::builder()
            .default_headers(headers)
            .build()?;

        let rate_limit = client.get(Self::RATE_LIMIT).send().await?.json().await?;

        Ok(Self { client, rate_limit })
    }

    pub async fn get(&mut self, url: &str) -> Result<Contents> {
        let now = Utc::now();
        if self.rate_limit.resources.core.remaining <= 0 {
            let dur = self.rate_limit.resources.core.reset - now;
            let later = Instant::now() + dur.to_std()?;
            delay_until(later).await;
        } else {
            self.rate_limit.resources.core.remaining -= 1;
        }

        let resp = self.client.get(url).send().await?;
        // self.rate_limit.resources.core = Rate::from_headers(resp.headers());
        Ok(resp.json::<Contents>().await?)
    }
}
