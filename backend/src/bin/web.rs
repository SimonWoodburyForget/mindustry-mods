use backend::*;
use clap::Clap;

const VERSION: &str = env!("CARGO_PKG_VERSION");

/// mindustry-mods cli.
#[derive(Clap)]
#[clap(author = "Simon W. Forget <simonwoodburyforget@gmail.com>")]
struct Opts {
    #[clap(short, long, default_value = "3042")]
    port: u16,
}

fn increment(old: Option<&[u8]>) -> Option<Vec<u8>> {
    let number: u64 = old.and_then(|x| bincode::deserialize(x).ok()).unwrap_or(0);
    bincode::serialize(&(number + 1)).ok()
}

fn add_timestamp(old: Option<&[u8]>) -> Option<Vec<u8>> {
    use chrono::prelude::*;
    let mut numbers: Vec<DateTime<Local>> = old
        .and_then(|x| bincode::deserialize(x).ok())
        .unwrap_or(vec![]);
    numbers.push(Local::now());
    bincode::serialize(&numbers).ok()
}

#[tokio::main]
async fn main() -> Result<()> {
    let Opts { port } = Opts::parse();
    println!("running server");
    println!("  port: {}", port);
    println!("  version: {}", VERSION);

    use std::path::PathBuf;
    let root: PathBuf = PathBuf::from("/web/mindustry-mods");
    let root_data: PathBuf = root.join("data");
    let static_dir: PathBuf = root.join("www/static");

    let db = sled::open(root_data.join("db"))?;

    use warp::Filter;
    let stats = db.open_tree(b"statistics")?;
    let index_file = warp::path::end()
        .and(warp::fs::file(static_dir.join("index.html")))
        .with(warp::log::custom(move |_info| {
            let _result = stats.update_and_fetch(b"requests:index", increment);
            let result = stats
                .update_and_fetch(b"request-timestamps:index", add_timestamp)
                .ok()
                .flatten();
            if let Some(bytes) = result {
                use chrono::prelude::*;
                let mut timestamps: Vec<DateTime<Local>> = bincode::deserialize(&bytes).unwrap();
                let len = timestamps.len();
                if let Some(dt) = timestamps.pop() {
                    let (h, m, s) = (dt.hour(), dt.minute(), dt.second());
                    println!("  {}. timestamp: {}:{}:{}", len, h, m, s);
                }
            }
        }));

    let static_dir = warp::path("static").and(warp::fs::dir(static_dir));

    let stats = db.open_tree(b"statistics")?;
    let statistics = warp::path("statistics").map(move || {
        if let Some(bytes) = stats.get("request-timestamps:index").ok().flatten() {
            use chrono::prelude::*;
            let timestamps: Vec<DateTime<Local>> = bincode::deserialize(&bytes).unwrap();
            timestamps
                .iter()
                .enumerate()
                .rev()
                .map(|(e, dt)| {
                    let (d, h, m, s) = (dt.ordinal0(), dt.hour(), dt.minute(), dt.second());
                    format!("{:>5}. {:>3} {:02}:{:02}:{:02}\n", e, d, h, m, s)
                })
                .collect()
        } else {
            "err".to_string()
        }
    });

    let version = warp::path("version").map(|| VERSION);

    warp::serve(static_dir.or(statistics).or(version).or(index_file))
        .run(([0, 0, 0, 0], port))
        .await;

    Ok(())
}
