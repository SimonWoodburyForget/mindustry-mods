""" Python script to help build an organized list of JSON mods. 

This will do nothing super fancy, just build some HTML from some
static YAML file, with the following characteristics:

```
author: Author Name
name: Mod Name
about: Short description.
repo: User/Repo
content:
    - items/silver
    - blocks/forget
category: example
```

- the YAML file should be separated into documents 
  with `---`;

- the `content` key is optional, and is used to link
  example content;

- if `repo` appears twice in the generation, the 
  last one should be picked;

- the `category` value is used to select under which
  section to put the mod.

"""

import yaml

def loads(path):
    """ Path load yaml data from. """
    with open(path, 'r') as f:
        data = yaml.load(f.read())
    return str(data)

if __name__ == '__main__':
    loads("src/awesome-mindustry.yaml")
