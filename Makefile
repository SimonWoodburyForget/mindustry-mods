
clean:
	rm dist/css -rf
	rm frontend/pkg -rf

build:
	wasm-pack build frontend --target web
	cp frontend/pkg dist -rf
	cp css dist -rf
	cp frontend/index.html dist -f

publish:
	python3.8 scripts/mindustry-mods.py -i
	npm run deploy
