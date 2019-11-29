
dist:
	@echo "=== Rebuilding ClojureScript ==="
	rm js/* -rf
	lein cljsbuild once release
	@echo "=== Rebuilding and Updating HTML ==="
	python3.8 src/mindustry-mods.py -i

