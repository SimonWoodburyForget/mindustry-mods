use serde::Deserialize;

#[derive(Deserialize, Debug, Clone)]
struct Mod {
    author: String,
    name: String,
    stars: u32,
    date_tt: f64,
    desc: String,
    link: String,
    repo: String,
    wiki: Option<String>,
    delta_ago: String,
    icon_raw: Option<String>,
    contents: Vec<String>,
    assets: Vec<String>,
    version: Option<String>,
    readme: String,
}
