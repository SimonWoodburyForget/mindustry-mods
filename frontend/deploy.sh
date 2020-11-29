#!/bin/bash

wasm-pack build --target web

echo "\nstatic -> $MINDUSTRY_MODS_PATH/www/static"
sudo rsync -avzhp --chown webadmin:web static $MINDUSTRY_MODS_PATH/www
echo "\npkg -> $MINDUSTRY_MODS_PATH/www/static/pkg"
sudo rsync -avzhp --chown webadmin:web pkg $MINDUSTRY_MODS_PATH/www/static
