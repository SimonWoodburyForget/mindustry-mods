""" Python script to help build an organized list of JSON mods. 

This will do nothing super fancy, just build some HTML from some
static YAML file, with the following characteristics:

```
---
author: Author Name
name: Mod Name
about: Short description.
repo: User/Repo
content:
    - items/silver
    - blocks/forge
category: example
...
```

- the YAML file should be separated into documents 
  with `---`;

- the `content` key is optional, and is used to link
  example content;

- if `repo` appears twice in the generation, the 
  last one should be picked;

- the `category` value is used to select under which
  section to put the mod;

- the `images` key is for images of content.

"""

from pathlib import Path
from collections import namedtuple

import json
import yaml
import jinja2
import github


def repo(mod):
    ''' Returns the mods Github repository name. '''
    return mod["repo"]

def link(mod):
    ''' Returns the mods Github repository link. ''' 
    return "https://github.com/" + repo(mod)

def desc(mod):
    ''' Returns the mods description. '''
    return mod["about"] if "about" in mod else ""

def name(mod):
    return mod["name"].lower().replace(" ", "-")

def icon(mod):
    ''' Returns the mods icon path. (small image) '''
    return f"images/{name(mod)}-icon.png"

class Mod(namedtuple("Mod", "repo link desc icon stars")):
    pass
    
def loads(path):
    """ Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use. """    
    with open(path, 'r') as f:
        data = { x["repo"]: x
                 for x in yaml.load_all(f.read()) }.values()
    return list(x for x in data)

class Repo(namedtuple("Repo", "name stars")):
    @staticmethod
    def from_github(gh, name):
        ''' Gets a Github repository from Github. '''
        repo = gh.get_repo(name)
        return Repo(name, repo.stargazers_count)

    def into_dict(self):
        return dict(self._asdict())

template = jinja2.Template('''
List of mods:
{% for mod in mods %}
  - ![ ]({{ mod.icon }}) {{ mod.stars }} Stars [{{ mod.repo }}]({{ mod.link }}) {{ mod.desc }}
{% endfor %}
''')

def repos_cached(gh, mods, update=False):
    ''' Gets repos and caches them if update cache is true. '''
    repos_path = Path.home() / ".github-cache"
    if update:
        repos = [ Repo.from_github(gh, x) for x in mods ]
        with open(repos_path, "w") as f:
            json.dump([ r.into_dict() for r in repos ], f)
    else:
        with open(repos_path) as f:
            repos = [ Repo(**r) for r in json.load(f) ]
    return repos

def build(token, path="src/mindustry-mods.yaml", ):
    """ Builds index.html """
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m["repo"] for m in mods])

    mods = [ Mod(repo(m), link(m), desc(m), icon(m), r.stars)
             for m, r in zip(mods, repos) ]

    data = template.render(mods=mods)

    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    with open(Path.home() / ".github-token") as f:
        build(f.read())
