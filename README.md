# Mindustry Mods

Checkout the website here: https://simonwoodburyforget.github.io/mindustry-mods/

Add mods to listing here: https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md

## Development

Requirements:
- Python 3.8: 
  - [`requirements.txt`](requirements.txt)
- Rust 1.42.0:
  - [`wasm-pack`](wasm-pack)
  - [`cargo-make`](cargo-make)
- npm:
  - gh-pages 2.2.0

Executing: 
- `cargo run -- -iph`

Testing: 
- `cargo test`
- `cargo make dist-test` (pushes to test repo)

Building:
- `cargo make dist-release` (pushes to main repo with gh-pages)

Notes: `cargo make dist-*` *related commands require repo access,
relative paths and urls are hardcoded to make that work.*

[requirements]: https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt
[wasm-pack]: https://github.com/rustwasm/wasm-pack
[cargo-make]: https://github.com/sagiegurari/cargo-make
[rustup]: https://rustup.rs/
