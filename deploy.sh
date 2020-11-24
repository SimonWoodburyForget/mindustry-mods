#!/bin/bash

SYS="/etc/systemd/system"
WEB="/web/mindustry-mods"
SERVICES=("mindustry-mods-web" "mindustry-mods-script")

sudo mkdir $WEB -p
sudo mkdir $WEB/bin -p

sudo cp target/release/web $WEB/bin/web -f

cd scripts
sudo pip install . --upgrade
cd ..

sudo mkdir $WEB/www -p
sudo cp frontend/index.html $WEB/www -f
for x in pkg css images
do
    sudo cp frontend/$x $WEB/www -rf
done

for x in ${SERVICES[@]}
do
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
