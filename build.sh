#!/bin/bash

cargo build --release --bin web

(cd common; maturin build)

wasm-pack build frontend --target web

rsync -a frontend/static target
rsync -a frontend/pkg target/static

rsync -zaP . $REMOTE --exclude debug --exclude target/release --exclude backup
