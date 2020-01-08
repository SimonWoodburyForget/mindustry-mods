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

Simply install Rust through [`rustup`](https://rustup.rs/), this tool
can install Rust and it's build tool Cargo.

### `wasm-pack`

```
cargo install wasm-pack
```

[`wasm-pack`](https://github.com/rustwasm/wasm-pack)
is used to build and package the Wasm file for the
browser (currently done without a bundler).

### `make`

```
sudo apt install make
```

`make` just runs the local `Makefile`, nothing fancy here.

## Building

To build the Wasm file just run the following:

```
make build
```

This will run the `wasm-dist` task in `frontend/Makefile.toml`, which will run
`wasm-pack` on top of a few commands, which will move the `./pkg` into
the right place.

## Testing

### Unit Tests

```
cargo test
```

Fastest way to get a result is through cargo test.

### Runner

```
cd dist
python3.8 -m http.server 9000
```

Running the app will give more conclusive results on what you actually
did. You want to run a server from the generated `dist/` directory.

A Python file server is being used, openning the browser at
`localhost:9000` will show the browser app running. Using the latest
version of Python will ensure the correct wasm mimetype exists, which
make not be the case in your existing Python 3 version.

## Publishing

- gh-pages 2.2.0

The standard `gh-pages` npm tool is used to publish to the `gh-pages`
branch. If anything that's the only reason npm is here. 
