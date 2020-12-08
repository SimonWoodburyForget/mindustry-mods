#!/bin/bash

TARGET="$ARCH-unknown-linux-gnu"

cargo build --release --bin web --target=$TARGET

(cd common; maturin build --target=$TARGET)

wasm-pack build frontend --target web

rsync -a frontend/static target
rsync -a frontend/pkg target/static

rsync -zaP . $REMOTE --exclude debug --exclude target/release --exclude backup
