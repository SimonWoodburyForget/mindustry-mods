# Mindustry Mods

Website: http://mindustry-mods.metasimon.space/

## Development

This is a three parts application:

- backend (rust), basic file server
- scripts (mixed rust/python), github data caching
- frontend app (rust wasm), html rendering

Requirements:

- Python 3.8
- Rust 1.48
- [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
- [`maturin`](https://github.com/PyO3/maturin)
