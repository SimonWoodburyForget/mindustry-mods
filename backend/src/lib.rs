pub mod rate;
pub mod request;
pub mod version;

use crate::request::Content;
use crate::version::Version;

use anyhow::Result;
use chrono::{DateTime, Utc};
use directories::ProjectDirs;
use serde::{Deserialize, Serialize};
use serde_hjson::value::ToJson;
use serde_json::json;
use std::collections::HashMap;
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
    version: Version,
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

pub mod cli {
    use std::{path::PathBuf, process::Command};
    use structopt::StructOpt;

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

    pub struct App(Opt);

    impl App {
        pub fn new() -> Self {
            Self(Opt::from_args())
        }

        /// Runs updater.
        pub fn run(&self) {
            let &Self(Opt {
                push,
                clean,
                hourly,
                instant,
                ..
            }) = self;

            let args = [("-p", push), ("-c", clean), ("-h", hourly), ("-i", instant)];
            let args = args
                .iter()
                .filter_map(|&(arg, b)| if b { Some(arg) } else { None });

            let _code = Command::new("python3.8")
                .arg("scripts/mindustry-mods.py")
                .args(args)
                .status()
                .expect("script failure")
                .success();
        }
    }
}

/// Type to allow conversion of Hjson and Json value.
/// This is required because serde_hjson uses an older
/// version of serde. (serde 0.7)
struct Hjson(serde_hjson::Value);

impl From<Hjson> for serde_json::Value {
    fn from(value: Hjson) -> Self {
        let Hjson(value) = value;
        match value {
            serde_hjson::Value::Null => serde_json::Value::Null,
            serde_hjson::Value::Bool(x) => json!(x),
            serde_hjson::Value::I64(x) => json!(x),
            serde_hjson::Value::U64(x) => json!(x),
            serde_hjson::Value::F64(x) => json!(x),
            serde_hjson::Value::String(x) => json!(x),
            serde_hjson::Value::Array(x) => json!(x
                .into_iter()
                .map(|x| Hjson(x).into())
                .collect::<Vec<serde_json::Value>>()),
            serde_hjson::Value::Object(x) => json!(x
                .into_iter()
                .map(|(k, v)| (k, Hjson(v).into()))
                .collect::<HashMap<_, serde_json::Value>>()),
        }
    }
}

pub async fn main() -> Result<()> {
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

    let mods_meta: Vec<serde_hjson::Value> = github
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

    let x: Vec<ModInfo> = serde_json::from_value(Hjson(mods_meta.to_json()).into())?;

    // let x: JValue = mods_meta.into();
    // let x: Vec<HashMap<String, JValue>> = serde_json::from_str(&x).unwrap();

    println!("{:?}", x);

    // let mods_meta: Vec<Mod> = mods_source.iter();

    Ok(())
}
