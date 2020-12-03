#!/bin/bash

cargo build --release
sudo rsync -zaPv --chown webadmin:web target/release/web /web/mindustry-mods/bin

(cd common; maturin build)
pip3.8 install $(ls -Art target/wheels/scripts-*-cp38-*.whl | tail -n 1) \
       --upgrade\
       --force-reinstall\
       --no-deps

(cd frontend; deploy.sh)

SYS="/etc/systemd/system"
sudo rsync -zaPv service/*.service $SYS
for x in $(ls service/*.service)
do
    x=$(basename -- "$x")
    if test -f $SYS/$x; then
	echo Restarting $x
	sudo systemctl daemon-reload
	sudo systemctl restart $x
    else
	echo Starting $x
	sudo systemctl start $x
	sudo systemctl enable $x
    fi
done 
