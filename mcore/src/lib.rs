use serde::{Deserialize, Serialize};

pub mod color;
pub mod markup;

mod path {
    pub const GITHUB: &str = "https://github.com";
}

/// Mod struct version. If breaking changes occur, this version number is
/// incremented, and access paths are changed, ensuring the cache is cleared
/// from the backend all the way to the frontend.
pub const MOD_VERSION: &str = "3.2";

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct Mod {
    /// mod name
    pub name: String,
    /// mod name with markup
    pub name_markup: String,
    /// link to repository
    pub link: String,
    pub repo: String,
    /// short description
    pub desc: String,
    /// short description with markup
    pub desc_markup: Option<String>,
    pub icon: Option<String>,
    /// repository stars
    pub stars: u32,
    /// author name
    pub author: String,
    /// author name with markup
    pub author_markup: Option<String>,
    /// last commit ISO formatted datetime
    pub date: String,
    /// last commit UTC timestamp epoch in seconds
    pub date_tt: f64,
    pub readme: String,
    pub version: Option<String>,
    pub assets: Vec<String>,
    pub contents: Vec<String>,
    /// markup encoded name
    #[serde(rename = "camelCase")]
    pub display_name: Option<String>,
}

impl Mod {
    pub fn archive_link(&self) -> String {
        format!("{}/{}/archive/master.zip", path::GITHUB, &self.repo)
    }
}
