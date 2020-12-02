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

import scripts
from scripts.minfmt import ignore_sbrack
from scripts.caching import icons
from scripts.config import DATA_PATH, MOD_META_VERSION, GITHUB_TOKEN, gh, GITHUB_REPO_CACHE_PATH
from scripts.caching.ghrepo import Repo
from scripts.caching.icons import update_icons
from scripts.caching import build_mods
from scripts.caching.ghrepo import try_branches

def update_frontend_data():
    repos = repo_load()
    icons = update_icons([ x.name for x in repos ])
    mods = build_mods(repos, icons)
    mods = list(reversed(sorted(mods, key=lambda x: x.date_tt())))
    json_string = scripts.dump(mods)
    with open(DATA_PATH / f"modmeta.{MOD_META_VERSION}.json", 'w') as f:
        f.write(json_string)

def search_repositories_recent(sha_list):
    '''Search for repositories on GitHub. Given an old list of `sha` values,
    helps this function minimize API calls, as search results are ordered by
    when they've been updated.'''
    paginated_list = gh.search_repositories("mindustry-mod", sort="updated")
    for repo in paginated_list[:100]:
        branch = try_branches(repo, ["master", "main"])
        if branch is None:
            continue
        if branch.commit.sha in sha_list:
            break
        else:
            repo_obj = Repo.from_repo(repo)
            if repo_obj is not None:
                yield repo_obj

def update_repositories_recent():
    '''The function updates the most recently updated repositories.
    Old repositories wont get updated, which makes it the most effecient.'''
    repo_objs = repo_load()
    sha_list = [ repo.sha for repo in repo_objs ]
    for repo_i in search_repositories_recent(sha_list):
        print(f"[log] new entry -- {repo_i.name}")
        for j, repo_j in enumerate(repo_objs):
            if repo_i.name == repo_j.name:
                repo_objs[j] = repo_i
                break
        repo_objs.append(repo_i)
    repo_dump(repo_objs)

def update_repositories_cached():
    '''This function updates all repositories cached.'''
    repo_objs = repo_load()
    remove = []
    for i, repo_obj in enumerate(repo_objs):
        repo = gh.get_repo(repo_obj.name)
        if repo.full_name != repo_obj.name:
            remove.append(repo_obj.name)
            continue
        repo_objs[i] = Repo.from_repo(repo)
    for name in remove:
        i = 0
        while i < len(repo_objs):
            if repo_objs[i].name == name:
                repo_objs.pop()
            else:
                i += 1
    repo_dump(repo_objs)

def repo_load():
    '''Loads Repo objects from json file if exist,
    otherwise creates a new empty one and returns it.'''
    PATH = GITHUB_REPO_CACHE_PATH
    if PATH.exists():
        with open(PATH, 'r') as f:
            return list({ Repo.from_dict(x) for x in json.load(f) })
    else:
        with open(PATH, 'w') as f:
            json.dump([], f)
        return []

def repo_dump(repo_objs):
    with open(GITHUB_REPO_CACHE_PATH, 'w') as f:
        json.dump([ r.into_dict() for r in set(repo_objs)], f)
        
def update(i):
    '''Takes PyGitHub instance and the mods-yaml data, and returns a modmeta, 
    which is generated data from what has been cached.'''
    print(i)
    if i % (60 * 5) == 0:
        try:
            update_repositories_recent()
            update_frontend_data()
            now = datetime.now()
            rate = gh.get_rate_limit()

            print(f"done: {now}")
            print("rate:")
            print(f"  limit: {rate.core.limit}")
            print(f"  remaining: {rate.core.remaining}")
            print(f"  reset: {rate.core.reset.replace(tzinfo=timezone.utc).astimezone(tz=None)}")
        except ConnectionError as e:
            # NOTE: catch connection errors like:
            #
            # - ratelimit errors, which occurs if the system
            #   gets suspended/hibernates and comes back online.
            # - timeout or other general connection errors.
            # 
            # ...this is a bad solution.
            print("[exception] ", e)
    # if i % (60 * 60 * 6) == 0:
    #     update_repositories_cached()

@click.group()
def cli():
    pass

@cli.command()
@click.argument("count", type=int)
def ls(count):
    mods = repo_load()
    mods = list(reversed(sorted(mods, key=lambda x: x.date)))
    for i, mod in enumerate(mods[:count]):
        print(i, mod)

@cli.command()
@click.option("--un-authenticated", help="Ignore missing GitHub token.")
def run(un_authenticated):
    if GITHUB_TOKEN is None:
        if un_authenticated:
            print("[error] no github token")
            sys.exit(1)
        else:
            print("[warn] no github token")
    i = 0
    while True:
        update(i)
        time.sleep(1)
        i += 1
        
if __name__ == '__main__':
    cli()
