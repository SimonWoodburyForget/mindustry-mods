/// runs simple server hosting ./dist
async fn server_run() {
    use warp::Filter;
    println!("running server");
    println!("  addr: 0.0.0.0:3042");
    warp::serve(warp::fs::dir("dist"))
        .run(([0, 0, 0, 0], 3042))
        .await;
}

struct Script {
    output: std::process::Child,
}

/// spawn python scripts updating ./dist
fn spawn_script() -> Script {
    use std::process::{Command, Stdio};

    let output = Command::new("python3.8")
        .arg("backend/scripts/mindustry-mods.py")
        .args(&["-i", "-h"])
        .stdout(Stdio::null())
        .spawn()
        .unwrap();

    Script { output }
}

#[tokio::main]
async fn main() {
    spawn_script();
    server_run().await;
}
