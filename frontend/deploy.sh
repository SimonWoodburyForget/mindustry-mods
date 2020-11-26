wasm-pack build --target web

for x in index.html pkg css images
do
    rsync -avzhp $x $MINDUSTRY_MODS_PATH/www
done
