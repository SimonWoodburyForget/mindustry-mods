use mindustry_mods_backend::*;

#[tokio::main]
async fn main() -> Result<()> {
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
