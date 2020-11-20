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
async fn main() {
    server_run().await;
}
