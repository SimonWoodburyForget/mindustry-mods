
test = ../minmods-test

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
	cp frontend/pkg $(test) -rf
	rm $(test)/pkg/.gitignore
	cp frontend/css $(test) -rf
	cp frontend/index.html $(test) -f
	cp dist/data $(test) -rf
	cd $(test)/ && git add * 
	cd $(test)/ && git commit -m "test" 
	cd $(test)/ && git push -u origin master

run:
	python3.8 scripts/mindustry-mods.py -iph
