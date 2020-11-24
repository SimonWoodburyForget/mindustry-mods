# Scripts

This is a mixed py/rust module, setup to work with [maturin](https://github.com/PyO3/maturin). To use it simply install maturin and then (assuming python3.8/rust is setup) build and install the wheel:

```bash
pip install maturin
maturin build
pip install $(ls -Art ../target/wheels/scripts-*.whl | tail -n 1) --upgrade
```

The environmental variable `GITHUB_TOKEN` should also to be set to a valid Github API token when executing the main script.
