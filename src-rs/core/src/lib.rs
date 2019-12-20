use serde::Deserialize;

#[derive(Deserialize, Debug, Clone)]
pub struct Mod {
    pub author: String,
    pub name: String,
    pub stars: u32,
    pub date_tt: f64,
    pub desc: String,
    pub link: String,
    pub repo: String,
    pub wiki: Option<String>,
    pub delta_ago: String,
    pub icon_raw: Option<String>,
    pub contents: Vec<String>,
    pub assets: Vec<String>,
    pub version: Option<String>,
    pub readme: String,
}
