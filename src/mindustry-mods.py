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

import yaml
import jinja2

def loads(path):
    """ Loads data from path, ensuring duplicates don't exist. """
    with open(path, 'r') as f:
        data = { x["repo"]: x for x in yaml.load_all(f.read()) }.values()
    return list(data)

def repo(mod):
    return mod["repo"]

def link(mod):
    return "https://github.com/" + repo(mod)

def desc(mod):
    return mod["about"] if "about" in mod else ""

template = jinja2.Template('''

List of mods:

{% for mod in mods %}
  - [{{ repo(mod) }}]({{ link(mod) }}) {{ desc(mod) }}
{% endfor %}

''')


def build(path="src/mindustry-mods.yaml"):
    """ Builds index.html """
    data = template.render(mods=loads(path), repo=repo, link=link, desc=desc)
    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    build()
