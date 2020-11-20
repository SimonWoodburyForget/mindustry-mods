# Mindustry Mods

Website: http://mindustry-mods.metasimon.space/

## Development

This is a three parts application:

- backend server (rust), which is just a basic file server
- backend scripts (python), which are used to get GitHub data
- frontend (rust wasm), which curren renders most of webpage


Requirements:

- Python 3.8: 
  - [`requirements.txt`](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt)
- Rust 1.48.0:
  - [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
  - [`cargo-make`](https://github.com/sagiegurari/cargo-make)
- Github personal access token at `~/.github-token` to increase request limit 
  from 500 to 5,000.
