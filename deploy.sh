#!/bin/bash

SYS="/etc/systemd/system"
WEB="/web/mindustry-mods"
SERVICES=("mindustry-mods-web" "mindustry-mods-script")

mkdir $WEB -p
mkdir $WEB/bin -p

cp target/release/web $WEB/bin/web -f

(cd scripts; maturin build)
pip install $(ls -Art target/wheels/scripts-*.whl | tail -n 1) --upgrade

mkdir $WEB/www -p
cp frontend/index.html $WEB/www -f
for x in pkg css images
do
    cp frontend/$x $WEB/www -rf
done

for x in ${SERVICES[@]}
do
    if test -f $SYS/$x.service; then
	echo Restarting $x
	cp service/$x.service $SYS -f
	systemctl daemon-reload
	systemctl restart $x.service
    else
	echo Installing $x
	cp service/$x.service $SYS
	systemctl start $x.service
	systemctl enable $x.service
    fi
done 
