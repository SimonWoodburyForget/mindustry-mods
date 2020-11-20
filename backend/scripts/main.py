""" Python script to pull Mindustry mods relative to repo name. """

from pathlib import Path
from collections import namedtuple
from collections import Counter
from datetime import datetime
from dataclasses import dataclass, asdict
from functools import partial
import time

# Decoding/Encoding
import json
import hjson
from minfmt import ignore_sbrack
import dateutil.parser
from base64 import b64decode

# Application Stuff
import subprocess
import time
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
from requests.exceptions import ConnectionError

from caching import modsmeta
from caching import icons
from config import DATA_PATH, MOD_META_VERSION, GITHUB_TOKEN, gh

def update_data(jdata):
    def copy(a, b):
        with open(DATA_PATH / a) as a, open(DATA_PATH / b, 'w') as b:
            print(a.read(), file=b)
        
    # update modmeta to with new data
    with open(DATA_PATH / f"modmeta.{MOD_META_VERSION}.json", 'w') as f:
        print(jdata, file=f)

def loads_crawl():
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

def build(update=True):
    '''Builds the README.md out of everything else here.'''
    rate_a = gh.get_rate_limit()
    mod_names = loads_crawl()
    mods = [ { "repo": x } for x in mod_names ]
    mods = modsmeta(mods, update)
    jdata = [ mm.pack_data() for mm in mods ]
    jdata = json.dumps(jdata)
    update_data(jdata)
    return (rate_a, gh.get_rate_limit())

def main():
    rates = build()
    now = datetime.now()
    print(f"done: {now}")
    print("rate:")
    print(f"  limit: {rates[1].core.limit}")
    print(f"  remaining: {rates[1].core.remaining}")
    print(f"  reset: {rates[1].core.reset.replace(tzinfo=timezone.utc).astimezone(tz=None)}")

@click.command()
@click.option('-h', '--hourly', is_flag=True, help="Keep running hourly.")
def cli(hourly):

    def main_run():
        try:
            main()
        except ConnectionError as e:
            # NOTE: catch connection errors like:
            #
            # - ratelimit errors, which occurs if the system
            #   gets suspended/hibernates and comes back online.
            # - timeout or other general connection errors.
            # 
            # ...this is a bad solution.
            print("[exception] ", e)

    while True:
        main_run()
        time.sleep(60 * 60)

if __name__ == '__main__':
    cli()
