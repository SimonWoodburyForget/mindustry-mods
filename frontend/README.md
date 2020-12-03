
# Seed-rs Frontend

This is the frontend application for mindustry-mods. It can be built with:

```bash
wasm-pack build --target web
```

The files in `./static` should be copied into `/web/mindustry-mods/static`, and `./pkg` into `/web/mindustry-mods/static`. The deploy script makes use of the `MINDUSTRY_MODS_PATH` environmental varible and `rsync`, such that it con be built here and deployed over a network. `--chown`  can be optionally included if they're being moved locally and you don't feel like changing users:

```bash
sudo rsync -avzhp --chown webadmin:web static $MINDUSTRY_MODS_PATH/www
sudo rsync -avzhp --chown webadmin:web pkg $MINDUSTRY_MODS_PATH/www/static
```
