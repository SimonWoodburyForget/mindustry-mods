#!/bin/bash

SYS="/etc/systemd/system"
WEB="/web/mindustry-mods"
SERVICES=("mindustry-mods-web" "mindustry-mods-script")

sudo mkdir $WEB -p
sudo chown $USER $WEB
sudo chgrp $USER $WEB

mkdir $WEB/bin -p
cp target/release/web $WEB/bin/web -f

mkdir $WEB/static -p
cp frontend/index.html $WEB/static -f
for x in pkg css images
do
    cp frontend/$x $WEB/static -rf
done

cp backend/scripts $WEB -rf

for x in ${SERVICES[@]}
do
    echo Doing $x
    if test -f $SYS/$x.service; then
	echo Restarting $x
	sudo cp service/$x.service $SYS -f
	sudo systemctl daemon-reload
	sudo systemctl restart $x.service
    else
	echo Installing $x
	sudo cp service/$x.service $SYS
	sudo systemctl start $x.service
	sudo systemctl enable $x.service
    fi
done 
