# Mindustry Mods

Website: https://mindustry-mods.metasimon.space/

## Development

Requirements:
- Python 3.8: 
  - [`requirements.txt`](requirements.txt)
- Rust 1.48.0:
  - [`wasm-pack`](wasm-pack)
  - [`cargo-make`](cargo-make)
- Github personal access token at `~/.github-token` to increase request limit 
  from 500 to 5,000.

Testing: 
- `cargo test`

Executing: 
- scripts: `cargo run -- -ih`, fetches data periodically.
- server: `cargo run --bin web`, fetches data periodically and server's it.

[requirements]: https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt
[wasm-pack]: https://github.com/rustwasm/wasm-pack
[cargo-make]: https://github.com/sagiegurari/cargo-make
[rustup]: https://rustup.rs/
