use serde::Deserialize;

pub const MOD_VERSION: &str = "1.1";

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
    pub displayName: Option<String>,
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
