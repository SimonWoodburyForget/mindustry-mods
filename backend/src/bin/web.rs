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
    let stats = db.open_tree(b"statistics")?;

    use warp::Filter;
    let index_file = warp::path::end()
        .and(warp::fs::file(static_dir.join("index.html")))
        .with(warp::log::custom(move |_info| {
            let result = stats.update_and_fetch(b"requests:index", increment);
            if let Some(bytes) = result.ok().flatten() {
                let number: u64 = bincode::deserialize(&bytes).unwrap();
                println!("requests: {}", number);
            }
        }));
    let static_dir = warp::path("static").and(warp::fs::dir(static_dir));

    warp::serve(static_dir.or(index_file))
        .run(([0, 0, 0, 0], port))
        .await;

    Ok(())
}
