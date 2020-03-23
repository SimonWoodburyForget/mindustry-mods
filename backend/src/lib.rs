pub mod rate;
pub mod request;

use crate::request::Content;
use anyhow::Result;
use chrono::{DateTime, Utc};
use directories::ProjectDirs;
use futures::future::join_all;
use mindustry_mods_core::Mod;
use serde::{Deserialize, Serialize};
use serde_hjson::{Map, Value};
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

/// The `mod.json` file.
#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "camelCase")]
struct ModInfo {
    name: Option<String>,
    description: Option<String>,
    author: Option<String>,
    version: Option<String>,
    dependencies: Option<Vec<String>>,
    display_name: Option<String>,
    min_game_version: Option<String>,
    hidden: Option<bool>,
    main_script: Option<String>,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
enum Assets {
    Content,
    Bundles,
    Sounds,
    Schematics,
    SpritesOverride,
    Sprites,
    Scripts,
}

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "kebab-case")]
enum Contents {
    Items,
    Blocks,
    Mechs,
    Liquids,
    Units,
    Zones,
}

#[derive(Deserialize, Serialize, Debug)]
struct Cache {
    name: String,
    stars: u32,
    date: DateTime<Utc>,
    sha: String,
    mod_info: ModInfo,
    readme: String,
    assets: Vec<Assets>,
    contents: Vec<Contents>,
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

pub async fn main() -> Result<()> {
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

    let github = request::GitHub::new(&token).await?;

    let mods_source: Vec<ModSource> = {
        let data = github
            .get_contents_decoded(Content {
                repo: "Anuken/MindustryMods",
                file: "mods.json",
            })
            .await?;
        serde_json::from_str(&data)
    }?;

    let mods_meta: Vec<Map<String, Value>> = github
        .get_all_decoded(mods_source.iter().take(3).map(|m| Content {
            repo: &m.repo,
            file: "mod.json",
        }))
        .await
        .iter()
        .filter_map(|x| match x {
            Ok(x) => Some(serde_hjson::from_str(&x).ok()?),
            // throw away all invalid results for now
            Err(_) => None,
        })
        .collect();

    dbg!(mods_meta);

    // let mods_meta: Vec<Mod> = mods_source.iter();

    Ok(())
}
