# Setup

Simply install Rust through [`rustup`](https://rustup.rs/), this tool
can install Rust and it's build tool Cargo.

Install the Rust apps through Cargo Install.

```
cargo install wasm-pack cargo-make
```

- [`wasm-pack`](https://github.com/rustwasm/wasm-pack)
  is used to build and package the Wasm file for the
  browser (currently done without a bundler).

- [`cargo-make`](https://github.com/sagiegurari/cargo-make) 
  is what it sounds like, it's used to run the `Makefile.toml`.

# Building

To build the the Wasm file from `src/lib.rs` you just run the
following from the current directory.

```
cargo make
```

This will run the `wasm-dist` task in `frontend/Makefile.toml`, which will run
`wasm-pack` on top of a few commands, which will move the `./pkg` into
the right place.

# Testing

The simplest way to test/run the app locally is to start a Python
server, then open your browser at `localhost:9000`.

```
python3 -m http.server 9000
```

Faster is just running unit tests.

```
cargo test
```
