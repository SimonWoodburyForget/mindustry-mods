
testdist = ../minmods-test

build:
	wasm-pack build frontend --target web
	cp frontend/pkg dist -rf
	rm dist/pkg/.gitignore
	cp frontend/css dist -rf
	cp frontend/index.html dist -f

publish:
	npm run deploy

test:
	wasm-pack build frontend --target web -- --features test-mode
	cp frontend/pkg $(testdist) -rf
	rm $(testdist)/pkg/.gitignore
	cp frontend/css $(testdist) -rf
	cp frontend/index.html $(testdist) -f
	cd $(testdist)/ \
		&& git add * \
		&& git commit -m "test" \
		&& git push -u origin master

run:
	python3.8 scripts/mindustry-mods.py -iph
