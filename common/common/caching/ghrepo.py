'''Module for caching GitHub data.'''
from pathlib import Path
from dataclasses import dataclass, asdict
from typing import List, Optional, Set
from datetime import datetime
import dateutil

import json
import hjson
from base64 import b64decode
from github import GithubException, UnknownObjectException

from common.config import GITHUB_REPO_CACHE_PATH, gh

def try_branches(repo, branch_list):
    if repo.default_branch is not None:
        [repo.default_branch] + branch_list
    for branch_name in branch_list:
        try:
            branch = repo.get_branch(branch_name)
        except GithubException as e:
            continue
        return branch
    return None

def try_hjson(text):
    try:
        return hjson.loads(text)
    except hjson.scanner.HjsonDecodeError as e:
        print(f"[error] Hjson error {e}")

def get_file(repo, filename):
    '''Gets one file from a repository and returns it as a string or None.'''
    try:
        return b64decode(repo.get_contents(filename).content).decode('utf8')
    except GithubException as e:
        print(f"[error] unable to find {filename} in {repo.name}")

ASSETS = set(x.strip() for x in '''
content
bundles
sounds
schematics
sprites-override
sprites
scripts
maps
'''.split('\n'))

CONTENTS = set(x.strip() for x in '''
items
blocks
mechs
liquids
units
zones
'''.split('\n'))

def get_assets(repo):
    '''Returns a set of assets found in repository.'''
    res = repo.get_dir_contents("/")
    return set(x.name for x in res if x.name in ASSETS)

def get_contents(repo):
    '''Returns a set of contents found in repository.'''
    res = repo.get_dir_contents("/content")
    return set(x.name for x in res if x.name in CONTENTS)

@dataclass
class ModInfo:
    '''mod.json data.'''

    '''mod.json name.'''
    name: str = None
    '''mod.json description.'''
    description: str = None
    '''mod.json author.'''
    author: str = None
    '''mod.json version.'''
    version: str = None
    '''mod.json dependencies.'''
    dependencies: List[str] = None
    '''mod.json display name.'''
    displayName: str = None
    '''mod.json minimum game version.'''
    minGameVersion: Optional[str] = None
    '''mod.json hidden.'''
    hidden: bool = None

    mainScript: str = None

    def __repr__(self):
        return f"ModInfo(name=\"{self.name}\")"
    
    @staticmethod
    def from_repo(repo):
        '''Get's mod.json from a specific repo.'''
        text = get_file(repo, "/mod.json")
        if text is None:
            text = get_file(repo, "/mod.hjson")
        if text is None:
            return None
        return ModInfo.from_text(text)

    @staticmethod
    def from_text(text):
        j = try_hjson(text) or None

        if j is None:
            return None

        # version should always be a string
        # but it may endup being a number
        if 'version' in j:
            j['version'] = str(j['version'])

        if 'minGameVersion' in j:
            j['minGameVersion'] = str(j['minGameVersion'])

        if j is not None:
            try:
                return ModInfo(**j)
            except TypeError:
                # unexpected keywords
                print(f"[error] type/key error in mod.json -- {j}")
                return None
        else:
            print(f"[error] unable to parse mod.json")
            return ModInfo()

@dataclass
class Repo:
    '''Raw untouched data from the repository.'''

    '''Repo endpoint.'''
    name: str
    '''Number of stargazers.'''
    stars: int
    '''Last commit date.'''
    date: datetime
    '''Last commit hash.'''
    sha: str
    '''Mod.json of repository.'''
    mod: Optional[ModInfo]
    '''README.md of the repository.'''
    readme: str
    '''A set of assets found in the repo.'''
    assets: Set[str]
    '''A set of contents found in the repo.'''
    contents: Set[str]
    '''The default repository branch. (aka: master or main)'''
    default_branch: str
    '''The minimum game version.'''
    min_game_version: Optional[str] = None

    def __repr__(self):
        return f"Repo(name=\"{self.name}\")"

    def __eq__(self, other):
        return self.name == other.name

    def __hash__(self):
        return self.name.__hash__()
    
    @staticmethod
    def from_repo(repo):
        branch = try_branches(repo, ["master", "main"])
        sha = branch.commit.sha
        assets = get_assets(repo)
        contents = get_contents(repo) if 'content' in assets else set()
        modinfo = ModInfo.from_repo(repo)
        if modinfo is None:
            return None
        return Repo(
            repo.full_name,
            stars=repo.stargazers_count,
            date=repo.get_commit(sha).commit.author.date,
            sha=sha,
            mod=modinfo,
            readme=get_file(repo, "README.md") or "",
            assets=assets,
            contents=contents,
            default_branch=branch.name,
            min_game_version=modinfo.minGameVersion,
        )

    def archive_link(self):
        return f"https://github.com/{self.repo}/archive/master.zip"

    def into_dict(self):
        '''Called when the object is about to be serialized.'''
        return { **asdict(self),
                 'date': str(self.date),
                 'assets': sorted(list(self.assets)),
                 'contents': sorted(list(self.contents)) }

    def from_dict(d):
        '''Called when the object is being deserialized.'''
        return Repo(**{ **d,
                        "date": dateutil.parser.parse(d["date"]),
                        "mod": ModInfo(**d["mod"]),
                        "assets": set(d["assets"]),
                        "contents": set(d["contents"]) })
