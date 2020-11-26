
# Seed-rs Frontend

This is the frontend application for mindustry-mods. Deploying is simply a matter of building with wasm-pack and then copying the files to wherever they need to be. Here rsync is used in the `deploy.sh` script, which can also be used to deploy over ssh. The environmental valiable `MINDUSTRY_MODS_PATH` can be set to either `"/web/mindustry-mods"` for a local transfer, or `"user@---.---.---.---:/web/mindustry-mods"` where `user` is the user and `---.---.---.---` is the IP address (or domain) of the ssh server.

Build:

```bash
wasm-pack build --target web
```

Deploy:

```bash
for x in index.html pkg css images
do
    rsync -avzhp $x $/MINDUSTRY_MODS_PATH/www
done
```
