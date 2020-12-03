# Mindustry Mods

Website: http://mindustry-mods.metasimon.space/

## Development

This is a three parts application:

- backend (rust), basic file server
- common (mixed rust/python), github, parsing, caching, statics data
- frontend app (rust wasm), html rendering

Basic requirements:

- Python 3.8
- Rust 1.48
- [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
- [`maturin`](https://github.com/PyO3/maturin)

