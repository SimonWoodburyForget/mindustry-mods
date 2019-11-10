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
    """ Loads data from path, ensuring duplicates don't exist. """
    with open(path, 'r') as f:
        data = { x["repo"]: x for x in yaml.load_all(f.read()) }.values()
    return list(data)

def fmt_entry_content(repo, xs):
    def fmt(x):
        link = f"https://github.com/{repo}/tree/master/sprites/{x}.png"
        return f'  - ![{x}]({link})'
    
    return "\n".join(fmt(x) for x in xs)

def fmt_entry(x):
    repo = x["repo"]
    link = "https://github.com/" + repo
    desc = x["about"]
    cont = fmt_entry_content(repo, x["content"]) if "content" in x else ""
    return "\n".join([f'- [{repo}]({link}) {desc}', cont])

def fmt_content(x):
    return "List of mods:\n" + "\n".join(x)

def build(path="src/mindustry-mods.yaml"):
    """ Builds index.html """
    data = fmt_content(fmt_entry(x) for x in loads(path))
    with open("README.md", 'w') as f:
        print(data, file=f)

if __name__ == '__main__':
    build()
