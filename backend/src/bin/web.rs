//! Main entry point into backend.
use mindustry_mods_backend::*;

use clap::Clap;
use std::{path::PathBuf, process::Command};

/// mindustry-mods cli.
#[derive(Clap)]
#[clap(
    version = "1.0",
    author = "Simon W. Forget <simonwoodburyforget@gmail.com>"
)]
struct Opts {
    #[clap(subcommand)]
    subcmd: SubCommand,
}

#[derive(Clap)]
enum SubCommand {
    Run,
}

/// runs simple server hosting ./dist
async fn server_run() {
    use warp::Filter;
    println!("running server");
    println!("  addr: 0.0.0.0:3042");
    warp::serve(warp::fs::dir("/web/mindustry-mods/www").map(|x| {
        use chrono::prelude::*;
        println!("request: {}", Local::now());
        x
    }))
    .run(([0, 0, 0, 0], 3042))
    .await;
}

#[tokio::main]
async fn main() -> Result<()> {
    let opts = Opts::parse();
    match opts.subcmd {
        SubCommand::Run => server_run().await,
    }
    Ok(())
}
