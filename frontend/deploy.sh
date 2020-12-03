#!/bin/bash

wasm-pack build --target web

echo "\nstatic -> $MINDUSTRY_MODS_PATH/www/static"
sudo rsync -zaPv --chown webadmin:web static $MINDUSTRY_MODS_PATH/www
echo "\npkg -> $MINDUSTRY_MODS_PATH/www/static/pkg"
sudo rsync -zaPv --chown webadmin:web pkg $MINDUSTRY_MODS_PATH/www/static
