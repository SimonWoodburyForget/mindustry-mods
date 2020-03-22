use mindustry_mods_backend::request::*;

use anyhow::Result;
use directories::ProjectDirs;
use serde::Deserialize;
use std::path::PathBuf;
use structopt::StructOpt;
use tokio::prelude::*;

/// Deserializes mods from list at: https://github.com/Anuken/MindustryMods/blob/master/mods.json
#[derive(Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
struct ModSource {
    /// ex: `"What42Pizza/Mindustry-Production-Mod"`
    repo: String,

    /// ex: `"Mindustry-Production-Mod"`
    name: String,

    /// ex: `"[orange]What42Pizza"`
    author: String,

    /// ex: `"2020-03-18T16:35:29Z"`
    last_updated: String,

    /// ex: `25`
    stars: u32,

    /// ex: `"[white]This mod gives you [orange]iron[white]..."`
    description: String,
}

/// Midustry-Mods backend CLI.
#[derive(StructOpt, Debug)]
#[structopt(name = "mindustry-mods")]
struct Opt {
    /// Run templates right away
    #[structopt(short, long)]
    instant: bool,

    /// Push said changes to GitHub.
    #[structopt(short, long)]
    push: bool,

    /// Keep running hourly.
    #[structopt(short, long)]
    hourly: bool,

    /// Clear cache and stuff.
    #[structopt(short, long)]
    clean: bool,

    /// No update, just get to the end.
    #[structopt(short, long)]
    fast: bool,

    /// Path to root of directory.
    #[structopt(short = "d", long, default_value = ".", parse(from_os_str))]
    path: PathBuf,
}

#[tokio::main]
async fn main() -> Result<()> {
    let opt = Opt::from_args();

    let dirs = ProjectDirs::from("", "Mindustry-Mods", "Mindustry-Mods-Backend")
        .expect("Project directories returned None.");
    tokio::fs::create_dir_all(dirs.config_dir()).await?;

    let token_path = dirs.config_dir().join("github-token");
    let mut file = match tokio::fs::File::open(token_path).await {
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {
            println!("Github token file not found.");
            return Ok(());
        }

        other => other,
    }?;

    let mut token = "token ".to_string();
    file.read_to_string(&mut token).await?;

    let mut github = GitHub::new(&token).await?;
    let resp = github
        .get_contents("Anuken/MindustryMods", "mods.json")
        .await?;
    let content = match resp.encoding {
        Encoding::Base64 => {
            String::from_utf8(base64::decode(str::replace(&resp.content, "\n", ""))?)
        }
    }?;

    let mods_source: Vec<ModSource> = serde_json::from_str(&content).unwrap();

    // .json::<Vec<core::Mod>>()
    // .await?;

    // let yaml_path = dirs.config_dirs() / "mindustry-mods.yaml";

    // let mut file = File::open().await?;

    // // Authorization: token OAUTH-TOKEN
    // let resp = reqwest::get("https://api.github.com/user")
    //     .await?
    //     .json::<HashMap<String, String>>()
    //     .await?;
    // println!("{:#?}", resp);
    Ok(())
}
