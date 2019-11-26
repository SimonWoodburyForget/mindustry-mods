
build:
	python3.8 src/mindustry-mods.py -i

publish:
	lein cljsbuild build release
	python3.8 src/mindustry-mods.py -i

run:
	python3.8 src/mindustry-mods.py -ph
