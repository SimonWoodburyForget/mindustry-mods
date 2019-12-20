use serde::Deserialize;

pub const MOD_VERSION: &str = "1.0";

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

#[cfg(test)]
mod tests {
    use super::*;
    use std::include_str;

    const DATA: &str = include_str!("../../../data/modmeta.1.0.json");

    /// Tests data integrity by simply parsing it, which should
    /// panic if data can't be parsed.
    #[test]
    fn integrity() {
        let data: Vec<Mod> = serde_json::from_str(DATA).unwrap();
    }
}
