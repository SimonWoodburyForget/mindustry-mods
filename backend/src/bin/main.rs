//! Main entry point into backend.
use mindustry_mods_backend::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    cli::App::new().run();
    Ok(())
}
