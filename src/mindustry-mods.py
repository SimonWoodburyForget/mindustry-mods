""" Python script to pull Mindustry mods relative to repo name.
This modules requires Python 3.7 or higher.

The yaml configuration file format goes as follows:

    ---
    repo: User/Repo
    issue: zipped incorrectly
    author: Author Name
    name: Mod Name
    about: Short 
    ...

Documents are separated by `---`, and the file is
ended with `...`, with the following fields:

- `repo`: the repository to pull the mod.json from;

- `issue`: if present, the mod wont be rendered;

- `author`: if present, the mod's author name 
  will be overwritten;

- `name`: if present, the mod's name will be 
  overwritten;

- `about`: if present, the mod's description
  will be overwritten.

"""

from pathlib import Path
from collections import namedtuple

import json
import mson
from mson import ParseError
from minfmt import ignore_sbrack
import yaml
import jinja2
import github
import requests
from datetime import datetime
import dateutil.parser
from dataclasses import dataclass

def mod_dot_json(name):
    '''Returns the path to request the mod.json in the repo
    This may be used to pull authors/descriptions automatically
    '''
    return f"https://raw.githubusercontent.com/{name}/master/mod.json"

def loads(path):
    '''Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use.
    '''
    with open(path, 'r') as f:
        data = { x["repo"]: x
                 for x in yaml.safe_load_all(f.read()) }.values()
    return list(x for x in data)

@dataclass
class Repo:    
    name: str
    stars: int
    mname: str
    desc: str
    author: str
    date: datetime

    @staticmethod
    def from_github(gh, name):
        '''Gets a Github repository from Github, with other
        data which may require a few requests, and packs this
        data into a namedtuple to be cached.
        '''
        repo = gh.get_repo(name)
        sha = repo.get_branch("master").commit.sha
        date = repo.get_commit(sha).commit.author.date
        r = requests.get(mod_dot_json(name))
        mname = desc = author = None
        try:
            if r.status_code == 200:
                j = mson.jsonc.parse(r.text)
                mname, desc, author = j["name"], j["description"], j["author"]
            else:
                print(f"404 at {name}")
        except ParseError as e:
            print(f"Error in {name}: {e}")
        return Repo(name, repo.stargazers_count, mname, desc, author, date)

    def into_dict(self):
        '''Called when the object is about to be serialized.
        '''
        return { k: str(v) if k == 'date' else v
                 for k, v in self._asdict().items() }

    def from_dict(d):
        '''Called when the object is being deserialized.
        '''
        return Repo(**{ **d, "date": dateutil.parser.parse(d["date"]) })
        

template = jinja2.Template('''
A list of mods, ordered by most recently committed:

{% for mod in mods %}
  - [{{ mod.repo }}]({{ mod.link }}) ![ ]({{ mod.icon }}) {{ mod.author_fmt() }} *{{ mod.stars }} stars* -- {{ mod.desc }}
{% endfor %}
''')

def repos_cached(gh, mods, update=False, cache_path=Path.home() / ".github-cache"):
    '''Gets repos if update is `True` and caches them, 
    otherwise just reads the cached data.
    '''
    if update:
        repos = [ Repo.from_github(gh, x) for x in mods ]
        with open(cache_path, "w") as f:
            json.dump([ r.into_dict() for r in repos ], f)
    else:
        with open(cache_path) as f:
            repos = [ Repo.from_dict(d) for d in json.load(f) ]
    return repos

@dataclass
class ModMeta:
    '''Metadata to render mods in a template.
    '''
    
    repo: str
    link: str
    desc: str
    icon: str
    stars: int
    author: str
    date: datetime
    issue: str = None

    def author_fmt(self):
        return f"by {self.author}" if self.author else ""
    
    @staticmethod
    def build(m, r):
        def parse_or_nothing(x):
            return ignore_sbrack.parse(x or "")

        repo_name = m["repo"]        
        mods_name = parse_or_nothing(r.mname) if r.mname else m["repo"]
        mods_desc = parse_or_nothing(r.desc) if 'about' not in m else m['about']
        author = parse_or_nothing(r.author) if 'author' not in m else m['author']
        mindustry_name = repo_name.lower().replace(" ", "-")

        return ModMeta(repo=mods_name,
                           link=f"https://github.com/{repo_name}",
                           desc=mods_desc,
                           icon=f"images/{mindustry_name}-icon.png",
                           stars=r.stars,
                           author=author.strip(),
                           date=r.date,
                           issue=m["issue"] if 'issue' in m else None) 

    @staticmethod
    def builds(mods, repos):
        '''Turns a `Repo` and yaml config file (list of dicts) into a `Mod`, which 
        will be used in the templates.
        '''
        return [ ModMeta.build(m, r) for m, r in zip(mods, repos) if 'issue' not in m ]

def build(token, path="src/mindustry-mods.yaml", ):
    '''Builds the README.md out of everything else here.
    '''
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m["repo"] for m in mods])

    mods = ModMeta.builds(mods, repos)
    mods = reversed(sorted(mods, key=lambda x: x.date))

    data = template.render(mods=mods)

    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    with open(Path.home() / ".github-token") as f:
        build(f.read())
