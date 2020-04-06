pub mod color;
pub mod markup;

use serde::Deserialize;
pub const MOD_VERSION: &str = "3.2";

#[derive(Deserialize, Debug, Clone)]
pub struct Mod {
    pub author: String,
    pub name: String,
    pub name_markup: String,
    pub stars: u32,
    pub date_tt: f64,
    pub desc: String,
    pub desc_markup: Option<String>,
    pub link: String,
    pub repo: String,
    pub wiki: Option<String>,
    pub icon: Option<String>,
    pub contents: Vec<String>,
    pub assets: Vec<String>,
    pub version: Option<String>,
    pub readme: String,
    #[serde(rename = "camelCase")]
    pub display_name: Option<String>,
    pub date: String,
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs::File;
    use std::io::BufReader;

    fn data_path() -> &'static str {
        Box::leak(format!("../dist/data/modmeta.{}.json", MOD_VERSION).into_boxed_str())
    }

    fn data() -> Result<Vec<Mod>, serde_json::Error> {
        let file = File::open(data_path()).unwrap();
        let reader = BufReader::new(file);
        serde_json::from_reader(reader)
    }

    /// Tests data integrity by simply parsing it, which should
    /// panic if data can't be parsed.
    #[test]
    fn integrity() {
        assert!(!data().unwrap().is_empty());
    }
}
