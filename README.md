# Mindustry Mods

Website: https://mindustry-mods.metasimon.space/

## Development

Requirements:
- Python 3.8: 
  - [`requirements.txt`](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt)
- Rust 1.48.0:
  - [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
  - [`cargo-make`](https://github.com/sagiegurari/cargo-make)
- Github personal access token at `~/.github-token` to increase request limit 
  from 500 to 5,000.

Testing: 
- `cargo test`

Executing: 
- building: `cargo make dist-release`, builds/copies static data into dist.
- scripts: `cargo run -- -ih`, fetches data periodically.
- server: `cargo run --bin web`, fetches data periodically and server's it.

