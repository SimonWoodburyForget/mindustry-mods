//! Main entry point into backend.
use mindustry_mods_backend::*;

use clap::Clap;

/// mindustry-mods cli.
#[derive(Clap)]
#[clap(
    version = "1.0",
    author = "Simon W. Forget <simonwoodburyforget@gmail.com>"
)]
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
    use warp::Filter;
    let db = sled::open("/web/mindustry-mods/data/db")?;
    let stats = db.open_tree(b"statistics")?;
    println!("running server");
    println!("  addr: 0.0.0.0:3042");
    warp::serve(warp::fs::dir("/web/mindustry-mods/www").map(move |x| {
        let result = stats.update_and_fetch(b"requests", increment);
        if let Some(bytes) = result.ok().flatten() {
            let number: u64 = bincode::deserialize(&bytes).unwrap();
            println!("requests: {}", number);
        }
        x
    }))
    .run(([0, 0, 0, 0], port))
    .await;
    Ok(())
}
