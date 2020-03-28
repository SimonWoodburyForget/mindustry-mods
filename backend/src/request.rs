use crate::rate::RateLimit;
use anyhow::Result;
use futures::future::join_all;
use reqwest::{
    header::{HeaderMap, HeaderValue, AUTHORIZATION, USER_AGENT},
    Client,
};
use serde::Deserialize;
use thiserror::Error;

#[derive(Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub enum Encoding {
    Base64,
}

#[derive(Deserialize, Debug)]
pub struct Contents {
    pub encoding: Option<Encoding>,
    pub content: String,
}

#[derive(Error, Debug)]
pub enum GitHubError {
    #[error("file not found")]
    Http404,
}

pub struct GitHub {
    client: Client,
    rate_limit: RateLimit,
}

pub struct Content<'a> {
    pub repo: &'a str,
    pub file: &'a str,
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

    /// Get contents, and count requests with an atomic counter, delaying whenever
    /// rate limit remaining is too small.
    pub async fn get_contents(&self, Content { repo, file }: Content<'_>) -> Result<Contents> {
        let url = format!("https://api.github.com/repos/{}/contents/{}", repo, file);
        dbg!(&self.rate_limit.resources.core);
        self.rate_limit.resources.core.tick().await;
        let resp = self.client.get(&url).send().await?;
        // self.rate_limit.resources.core = Rate::from_headers(resp.headers())?;
        if resp.status() == 200 {
            Ok(resp.json::<Contents>().await?)
        } else {
            Err(GitHubError::Http404.into())
        }
    }

    /// Get base64 decoded contents.
    pub async fn get_contents_decoded(&self, content: Content<'_>) -> Result<String> {
        let resp = self.get_contents(content).await?;
        Ok(match resp.encoding {
            Some(Encoding::Base64) | None => {
                String::from_utf8(base64::decode(str::replace(&resp.content, "\n", ""))?)
            }
        }?)
    }

    /// Gets multiple decoded contents.
    pub async fn get_all_decoded(
        &self,
        repos: impl Iterator<Item = Content<'_>>,
    ) -> Vec<Result<String>> {
        join_all(
            repos
                .map(|c| self.get_contents_decoded(c))
                .collect::<Vec<_>>(),
        )
        .await
        // join_all(repos.iter().map(|(r, f)| self.get_contents(r, f)).collect()).await
    }
}
