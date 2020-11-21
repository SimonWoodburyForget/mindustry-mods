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
import schedule

# Generation
import humanize
import jinja2
import markdown
import re
import bs4
import urllib
from jinja2 import Markup
from requests.exceptions import ConnectionError

from caching import icons
from config import DATA_PATH, MOD_META_VERSION, GITHUB_TOKEN, gh, GITHUB_REPO_CACHE_PATH
from caching.ghrepo import Repo
from caching.icons import update_icons
from caching import ModMeta
from caching.ghrepo import try_branches

def update_frontend_data():
    repos = repo_loads(GITHUB_REPO_CACHE_PATH)    
    icons = update_icons([ x.name for x in repos ])
    mods = ModMeta.builds(repos, icons)
    mods = list(reversed(sorted(mods, key=lambda x: x.date)))
    jdata = [ mm.pack_data() for mm in mods ]
    with open(DATA_PATH / f"modmeta.{MOD_META_VERSION}.json", 'w') as f:
        json.dump(jdata, f)

def search_repositories_updated(sha_list):
    '''Search for repositories on GitHub. Given an old list of `sha` values,
    helps this function minimize API calls, as search results are ordered by
    when they've been updated.'''
    paginated_list = gh.search_repositories("mindustry-mod", sort="updated")
    for repo in paginated_list[:30]:
        branch = try_branches(repo, ["master", "main"])
        if branch is None:
            continue
        # if branch.commit.sha in sha_list:
        #     break
        repo_obj = Repo.from_repo(repo)
        if repo_obj is not None:
            yield repo_obj

def update_cached_repositories():
    '''Returns a list of repositories. This function only pulls most recently
    updated repositories, meaning old repositories wont get updated.'''
    repo_objs = repo_loads(GITHUB_REPO_CACHE_PATH)
    sha_list = [ repo.sha for repo in repo_objs ]
    for repo_i in search_repositories_updated(sha_list):
        print(f"[log] new entry -- {repo_i.name}")
        found = False
        for j, repo_j in enumerate(repo_objs):
            if repo_i.name == repo_j.name:
                repo_objs[j] = repo_i
                found = True
        if not found:
            repo_objs.append(repo_i)
    with open(GITHUB_REPO_CACHE_PATH, 'w') as f:
        json.dump([ r.into_dict() for r in repo_objs], f)

def repo_loads(path):
    if path.exists():
        with open(path, 'r') as f:
            return [ Repo.from_dict(x) for x in json.load(f) ]
    else:
        return []
    
def update():
    '''Takes PyGitHub instance and the mods-yaml data, and returns a modmeta, 
    which is generated data from what has been cached.'''
    update_cached_repositories()
    update_frontend_data()

    now = datetime.now()
    rate = gh.get_rate_limit()
    print(f"done: {now}")
    print("rate:")
    print(f"  limit: {rate.core.limit}")
    print(f"  remaining: {rate.core.remaining}")
    print(f"  reset: {rate.core.reset.replace(tzinfo=timezone.utc).astimezone(tz=None)}")

@click.group()
def cli():
    pass

@cli.command()
@click.argument("count", type=int)
def ls(count):
    mods = repo_loads(GITHUB_REPO_CACHE_PATH)
    mods = list(reversed(sorted(mods, key=lambda x: x.date)))
    for i, mod in enumerate(mods[:count]):
        print(i, mod)

@cli.command()
def run():
    def main():
        try:
            update()
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
        main()
        time.sleep(60 * 60)
        
if __name__ == '__main__':
    cli()
