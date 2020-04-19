
build:
	wasm-pack build frontend --target web
	cp frontend/pkg dist -rf
	cp frontend/css dist -rf
	cp frontend/index.html dist -f

publish:
	npm run deploy

test:
	wasm-pack build frontend --target web -- --features test-mode
	cp frontend/pkg ../minmods-test/pkg -rf
	cp frontend/css ../minmods-test/ -rf
	cp frontend/index.html ../minmods-test/ -f

run:
	python3.8 scripts/mindustry-mods.py -iph
