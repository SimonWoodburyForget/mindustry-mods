#!/bin/bash

sudo rsync -a $MINDUSTRY_MODS_PATH target/backup

sudo rsync -a --chown webadmin:web target/release/web $MINDUSTRY_MODS_PATH/bin

sudo pip3.8 install $(ls -Art target/wheels/common-*-cp38-*.whl | tail -n 1)\
       --upgrade\
       --force-reinstall\
       --no-deps

sudo rsync -a --chown webadmin:web target/static $MINDUSTRY_MODS_PATH/www

SYS="/etc/systemd/system"
sudo rsync -a service/*.service $SYS
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
