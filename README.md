website: https://simonwoodburyforget.github.io/mindustry-mods/
adding mods: https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/CONTRIBUTING.md

# Python Scripts

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

## Setup

Simply install Rust through [`rustup`](https://rustup.rs/), this tool
can install Rust and it's build tool Cargo.

Install the Rust apps through Cargo Install.

```
cargo install wasm-pack cargo-make
```

- [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
  is used to build and package the Wasm file for the
  browser (currently done without a bundler).

## Building

To build the Wasm file just run the following:

```
wasm-pack build frontend
```

This will run the `wasm-dist` task in `frontend/Makefile.toml`, which will run
`wasm-pack` on top of a few commands, which will move the `./pkg` into
the right place.

## Testing

The simplest way to test/run the app locally is to start a Python
server, then open your browser at `localhost:9000`. Using the latest
version of Python will ensure the correct wasm mimetype exists, but it
doesn't really matter otherwise.

```
python3.8 -m http.server 9000
```

Faster is just running unit tests.

```
cargo test
```
