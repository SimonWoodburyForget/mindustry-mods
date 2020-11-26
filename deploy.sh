#!/bin/bash

cargo build --release
rsync -avzhp target/release/web $MINDUSTRY_MODS_PATH/bin

(cd scripts; maturin build)
pip3.8 install $(ls -Art target/wheels/scripts-*-cp38-*.whl | tail -n 1) --upgrade

SYS="/etc/systemd/system"
rsync -avzhp service/*.service $SYS
for x in $(ls service/*.service)
do
    x=$(basename -- "$x")
    if test -f $SYS/$x; then
	echo Restarting $x
	systemctl daemon-reload
	systemctl restart $x
    else
	echo Starting $x
	systemctl start $x
	systemctl enable $x
    fi
done 
