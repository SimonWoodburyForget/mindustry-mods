#!/bin/bash

sudo rm -r $MINDUSTRY_MODS_PATH
sudo rsync -a target/backup/mindustry-mods/ $MINDUSTRY_MODS_PATH
