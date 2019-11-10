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

class Mod(namedtuple("Mod", "repo link desc icon")):
    @staticmethod
    def from_raw(raw):
        """ Turns the configuration from YAML 
        into a named tuble. """
        return Mod(repo(raw), link(raw), desc(raw), icon(raw))

def loads(path, gh):
    """ Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use. """
    
    with open(path, 'r') as f:
        data = { x["repo"]: Mod.from_raw(x, gh)
                 for x in yaml.load_all(f.read()) }.values()
    return list(x for x in data if x is not None)

template = jinja2.Template('''

List of mods:

{% for mod in mods %}
  - ![ ]({{ mod.icon }}) [{{ mod.repo }}]({{ mod.link }}) {{ mod.desc }}
{% endfor %}

''')

def build(token, path="src/mindustry-mods.yaml"):
    """ Builds index.html """
    gh = github.Github(token)
    data = template.render(mods=loads(path, gh))

    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    with open(Path.home() / ".github-token") as f:
        build(f.read())
