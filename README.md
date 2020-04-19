# Mindustry Mods

Checkout the website here: https://simonwoodburyforget.github.io/mindustry-mods/

Add mods to listing here: https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md

# Python Scripts

- Python 3.8
- [requirements.txt](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/scripts/requirements.txt)

## Executing

Python scripts are used to update data in `dist/data/modmeta.*.json` which is
used by the frontend. Before changing data `cargo test` is run, and if
errors are found, the old data is reused instead.

Data is currently cached in `~/.github-cache`, and if Git hashes don't
change, the specific repository is skipped. 

```
python3.8 scripts/mindustry-mods.py -iph
```

This would executing the script hourly. The `--help` argument can be
used to get more information. This assumes you're running the script
from the current directory, and `-d` is just the path back to the root
directory.

# Rust Frontend

- rustc 1.39.0

## Setup

Install Rust through [`rustup`](https://rustup.rs/), which also
installs Cargo.

- wasm-pack: `cargo install wasm-pack`
- make: `sudo apt install make`


[`wasm-pack`](https://github.com/rustwasm/wasm-pack)
is used to build and package the Wasm file for the
browser (currently done without a bundler).

`make` just runs the local `Makefile`, nothing fancy here.

## Building

- build wasm: `make build`

This will run the `wasm-dist` task in `frontend/Makefile.toml`, which will run
`wasm-pack` on top of a few commands, which will move the `./pkg` into
the right place.

## Testing

- unit tests: `cargo test` 
- full test: `make test`

The full test pushes to another repostory, to do a complete test on
the applicationo.

## Publishing

- gh-pages 2.2.0

`gh-pages` npm is used to publish to the `gh-pages`
branch, from the `dist/` output directory.
