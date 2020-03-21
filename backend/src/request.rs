use crate::rate::RateLimit;
use anyhow::Result;
use reqwest::{
    header::{HeaderMap, HeaderValue, AUTHORIZATION, USER_AGENT},
    Client,
};
use serde::Deserialize;

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
    rate_limits: RateLimit,
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

        let rate_limits = client.get(Self::RATE_LIMIT).send().await?.json().await?;

        Ok(Self {
            client,
            rate_limits,
        })
    }

    pub async fn get(&mut self, url: &str) -> Result<Contents> {
        let resp = self.client.get(url).send().await?;
        Ok(resp.json::<Contents>().await?)
    }
}
