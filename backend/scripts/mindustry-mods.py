""" Python script to pull Mindustry mods relative to repo name. """

from pathlib import Path
from collections import namedtuple
from collections import Counter
from datetime import datetime
from dataclasses import dataclass, asdict
from functools import partial
import time

# Decoding/Encoding
import yaml
import json
import mson
import hjson
from mson import ParseError
from minfmt import ignore_sbrack
import dateutil.parser
import parsec
from base64 import b64decode

# Application Stuff
import github
import subprocess
import time
import schedule
import click
#import appdirs
from github import GithubException
from datetime import datetime, timezone

# Generation
import humanize
import jinja2
import markdown
import re
import bs4
import urllib
from jinja2 import Markup

from caching import modsmeta
from caching import icons

# Version number for data, to allow multiple version of data at once,
# which unavoidably may eventually happen, because of caching.
MOD_META_VERSION = "3.2"

def loads_yaml(path):
    '''Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use.
    '''
    def key_handler(x, k):
        # missing repo key
        try:
            return x[k]
        except KeyError as e:
            print(f"KeyError: {e} in {x}")
            quit()

    with open(path, 'r') as f:
        data = [ x for x in yaml.safe_load_all(f.read()) ]
    repos = (key_handler(x, 'repo') for x in data)
    dups = [ x for x, count in Counter(repos).items()
             if count > 1 ]
    if dups:
        dupsfmt = "\n  * " + '\n  * '.join(dups)
        raise ValueError(f"\n Duplicate repository in yaml: {dupsfmt}")

    return data

def update_data(path, jdata):
    def copy(a, b):
        with open(path/a) as a, open(path/b, 'w') as b:
            print(a.read(), file=b)

    # backup data before copying
    try:
        copy(f'data/modmeta.{MOD_META_VERSION}.json',
             f'data/modmeta.{MOD_META_VERSION}.json.auto-bak')
    except FileNotFoundError as e:
        print("[warn] modmeta.1.1.json -- file not found")
        
    # update modmeta to with new data
    data = path / "data"
    data.mkdir(parents=True, exist_ok=True)
    with open(path/f"data/modmeta.{MOD_META_VERSION}.json", 'w') as f:
        print(jdata, file=f)

    # run tests
    # revert on error
    try:
        subprocess.check_output(['cargo', 'test'])
    except subprocess.CalledProcessError as e:
        print()
        print(e)
        print()
        print("[error] cargo test failed...")

        try:
            copy(f'data/modmeta.{MOD_META_VERSION}.json.auto-bak',
                 f'data/modmeta.{MOD_META_VERSION}.json')
        except FileNotFoundError:
            pass

def loads_crawl(gh):
    '''Loads an officially auto generated modlist, and returns set of repo paths.'''
    try:
        repo = gh.get_repo("Anuken/MindustryMods")
        data = b64decode(repo.get_contents("mods.json").content).decode('utf8')
    except GithubException as e:
        print(f"[error] failed to get auto-generated modlist. -- {e}")
        return []
    data = json.loads(data)
    # currently contains no other useful data
    return { x["repo"] for x in data }

def build(token, path, update=True):
    '''Builds the README.md out of everything else here.
    '''
    path = Path(path)
    
    dist_path = path/"dist/"
    dist_path.mkdir(exist_ok=True)
    
    yaml_path = path/"mindustry-mods.yaml"    
    mods_yaml = loads_yaml(yaml_path)

    gh = github.Github(token)
    rate_a = gh.get_rate_limit()

    mods_crawl = loads_crawl(gh)
    mods_missing = [ { "repo": x } for x in
                     (mods_crawl - { r['repo'] for r in mods_yaml }) ]
    mods_yaml += mods_missing

    mods = modsmeta(dist_path, gh, mods_yaml, update)

    jdata = [ mm.pack_data() for mm in mods ]
    jdata = json.dumps(jdata)

    update_data(dist_path, jdata)

    return (rate_a, gh.get_rate_limit())

def main(args):
    if args.clean:
        subprocess.run(["rm", config.CACHE_DIR])
        time.sleep(2)
        print("--- END CLEAN ---\n\n")

    path = Path(args.path)
    with open(Path.home()/".github-token") as f:
        rates = build(f.read().strip(), path)
        if not args.push: return
    time.sleep(2)
    print("--- END BUILD ---\n\n")
    
    subprocess.run(['npm', 'run', 'deploy'])
    time.sleep(2)
    print("--- END UPLOAD ---\n\n")
    
    now = datetime.now()
    print(f"done: {now}")
    print("rate:")
    print(f"  limit: {rates[1].core.limit}")
    print(f"  remaining: {rates[1].core.remaining}")
    print(f"  reset: {rates[1].core.reset.replace(tzinfo=timezone.utc).astimezone(tz=None)}")
    print(f"  used: {rates[0].core.remaining - rates[1].core.remaining}")

@dataclass
class Args:
    instant: bool
    push: bool
    hourly: bool
    clean: bool
    fast: bool
    path: str

@click.command()
@click.option('-i', '--instant', is_flag=True, help="Run templates right away.")
@click.option('-p', '--push', is_flag=True, help="Push said changes to GitHub.")
@click.option('-h', '--hourly', is_flag=True, help="Keep running hourly.")
@click.option('-c', '--clean', is_flag=True, help="Clear cache and stuff.")
@click.option('-f', '--fast', is_flag=True, help="No update, just get to the end.")
@click.option('-d', '--path', default=".", help="Path to root of directory.")
def cli(**args):
    args = Args(**args)
    main_run = lambda: main(args)

    if args.instant:
        main_run()

    if args.hourly:
        schedule.every(1).hour.at(':00').do(main_run)

        while True:
            schedule.run_pending()
            time.sleep(10)

if __name__ == '__main__':
    cli()
