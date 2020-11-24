# Mindustry Mods

Website: http://mindustry-mods.metasimon.space/

## Development

This is a three parts application:

- backend server (rust), which is just a basic file server
- backend scripts (python), which are used to get GitHub data
- frontend (rust wasm), which currently renders most of webpage

Requirements:

- Python 3.8: 
  - [`requirements.txt`](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt)
- Rust 1.48.0:
  - [`wasm-pack`](https://github.com/rustwasm/wasm-pack)

Environmental variables:
  - `GITHUB_TOKEN` for Github requests
