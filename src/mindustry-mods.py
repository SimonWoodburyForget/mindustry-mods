""" Python script to pull Mindustry mods relative to repo name.

The format goes as follows:

```
---
repo: User/Repo
issue: zipped incorrectly
author: Author Name
name: Mod Name
about: Short 
...
```

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
import minfmt
import yaml
import jinja2
import github
import requests
from datetime import datetime
import dateutil.parser

def repo(mod):
    '''Returns the mods Github repository name.
    '''
    return mod["repo"]

def link(mod):
    '''Returns the mods Github repository link.
    ''' 
    return "https://github.com/" + repo(mod)

def desc(mod):
    '''Returns the mods description.
    '''
    return mod["about"] if "about" in mod else ""

def name(mod):
    return mod["name"].lower().replace(" ", "-")

def icon(mod):
    '''Returns the mods icon path. (small image)
    '''
    return f"images/{name(mod)}-icon.png"

def mod_dot_json(name):
    '''Returns the path to request the mod.json in the repo
    This may be used to pull authors/descriptions automatically
    '''
    return f"https://raw.githubusercontent.com/{name}/master/mod.json"

class Mod(namedtuple("Mod", "repo link desc icon stars author date")):
    pass
    
def loads(path):
    '''Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use.
    '''
    with open(path, 'r') as f:
        data = { x["repo"]: x
                 for x in yaml.load_all(f.read()) }.values()
    return list(x for x in data)

class Repo(namedtuple("Repo", "name stars mname desc author date")):

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
        '''Called when the object is about to be serialized'''
        return { k: str(v) if k == 'date' else v for k, v in self._asdict().items() }

template = jinja2.Template('''
# Listing of Mods

{% for mod in mods %}
  - [{{ mod.repo }}]({{ mod.link }}) ![ ]({{ mod.icon }}) {{ mod.author }} *{{ mod.stars }} stars* -- {{ mod.desc }}
{% endfor %}
''')

def repos_cached(gh, mods, update=False):
    '''Gets repos and caches them if update cache is true.
    '''
    repos_path = Path.home() / ".github-cache"
    if update:
        repos = [ Repo.from_github(gh, x) for x in mods ]
        with open(repos_path, "w") as f:
            json.dump([ r.into_dict() for r in repos ], f)
    else:
        with open(repos_path) as f:
            repos = [ Repo(**{ **r,
                               "date": dateutil.parser.parse(r["date"]) })
                      for r in json.load(f) ]
    return repos

def build(token, path="src/mindustry-mods.yaml", ):
    '''Builds the README.md out of everything else here.
    '''
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m["repo"] for m in mods])

    mods = [ Mod(minfmt.ignore_sbrack.parse(r.mname or repo(m) or ""),
                 link(m),
                 minfmt.ignore_sbrack.parse(desc(m) or r.desc or ""),
                 icon(m),
                 r.stars,
                 (minfmt.ignore_sbrack.parse(
                     ("by " + r.author) if r.author else "")).strip(),
                 r.date)
             for m, r in zip(mods, repos) ]
    mods = reversed(sorted(mods, key=lambda x: x.date))

    data = template.render(mods=mods)

    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    with open(Path.home() / ".github-token") as f:
        build(f.read())
