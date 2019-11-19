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
  will be overwritten;

- `icon`: path in the project of the icon
  to be used.

"""

from pathlib import Path
from collections import namedtuple
from collections import Counter

import json
import mson
from mson import ParseError
from minfmt import ignore_sbrack
import yaml
import jinja2
import github
from github import GithubException
import requests
from datetime import datetime
import dateutil.parser
from dataclasses import dataclass, asdict
from PIL import Image
from io import BytesIO
import hjson
from functools import partial
import schedule
import time
import subprocess
from base64 import b64decode
import humanize

def mod_dot_json(name):
    '''Returns the path to request the mod.json in the repo
    This may be used to pull authors/descriptions automatically
    '''
    return f"https://raw.githubusercontent.com/{name}/master/mod.json"

def loads(path):
    '''Loads data from path, ensuring duplicates don't exist,
    and turning them into namedtuple, ready for a template to use.
    '''
    def key_handler(x, k):
        # missing repo key
        try:
            return x[k]
        except KeyError as e:
            print(f"KeyError: {e} in {x}")
            quit()

    with open(path, 'r') as f:
        data = [ x for x in yaml.safe_load_all(f.read()) ]
    repos = (key_handler(x, 'repo') for x in data)
    dups = [ x for x, count in Counter(repos).items()
             if count > 1 ]
    if dups:
        dupsfmt = "\n  * " + '\n  * '.join(dups)
        raise ValueError(f"\n Duplicate repository in yaml: {dupsfmt}")

    return data

@dataclass
class Repo:
    name: str
    stars: int
    date: datetime
    mname: str = None
    desc: str = None
    author: str = None

    @staticmethod
    def from_github(gh, name):
        '''Gets a Github repository from Github, with other
        data which may require a few requests, and packs this
        data into a namedtuple to be cached.
        '''
        def try_hjson(text):
            try:
                return hjson.loads(text)
            except hjson.scanner.HjsonDecodeError as e:
                print(f"Hjson error in {name}: {e}")

        def try_mson(text):
            try:
                return mson.jsonc.parse(text)
            except ParseError as e:
                print(f"Mson error in {name}: {e}")

        def key_handler(x, k):
            # missing key
            try:
                return x[k]
            except KeyError as e:
                print(f"KeyError: {e} in {name}")
                return None

        repo = gh.get_repo(name)
        sha = repo.get_branch("master").commit.sha
        date = repo.get_commit(sha).commit.author.date
        stars = repo.stargazers_count
        out = partial(Repo, name,
                      stars=stars,
                      date=date)

        try:
            text = b64decode(repo.get_contents("mod.json").content).decode('utf8')
        except GithubException as e:
            print(f"{name} mod.json {e.data['message']}")
            return out()

        j = try_hjson(text) or try_mson(text) or None
        if j is None:
            print(f"Skipping {name}")
            return out()
        else:
            return out(mname=key_handler(j, 'name'),
                       desc=key_handler(j, 'description'),
                       author=key_handler(j, 'author'))

    def into_dict(self):
        '''Called when the object is about to be serialized.
        '''
        return { k: str(v) if k == 'date' else v
                 for k, v in asdict(self).items() }

    def from_dict(d):
        '''Called when the object is being deserialized.
        '''
        return Repo(**{ **d, "date": dateutil.parser.parse(d["date"]) })


template = jinja2.Template('''
A list of mods, ordered by most recently committed. *Each `★` is 1 star.*

{% for mod in mods %}
  - *{{ mod.delta_ago()  }} ago* [{{ mod.repo }}]({{ mod.link }}) {{ mod.md_icon() }} {{ mod.author_fmt() }} -- {{ mod.stars_fmt() }} -- {{ mod.desc }}
{% endfor %}
''')

with open('src/template.html') as f:
    template_html = jinja2.Template(f.read())

def repos_cached(gh, mods, update=True, cache_path=Path.home() / ".github-cache"):
    '''Gets repos if update is `True` and caches them,
    otherwise just reads the cached data.
    '''
    # TODO: implement better caching
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

    def stars_fmt(self):
        return self.stars * '★ ' if self.stars else '☆'

    def author_fmt(self):
        return f"by {self.author}" if self.author else ""

    def md_icon(self):
        return f'![]({self.icon})' if self.icon is not None else ''

    def delta_ago(self):
        dt = datetime.utcnow() - self.date
        return humanize.naturaldelta(dt)

    @staticmethod
    def build(m, r, icon):
        def parse_or_nothing(x):
            return ignore_sbrack.parse(x or "")

        repo_name = m["repo"]
        mods_name = parse_or_nothing(r.mname) if r.mname else m["repo"]
        mods_desc = parse_or_nothing(r.desc) if 'about' not in m else m['about']
        author = parse_or_nothing(r.author) if 'author' not in m else m['author']
        mindustry_name = repo_name.split("/")[1].lower().replace(" ", "-")

        return ModMeta(repo=mods_name,
                       link=f"https://github.com/{repo_name}",
                       desc=mods_desc,
                       icon=icon,
                       stars=r.stars,
                       author=author.strip(),
                       date=r.date,
                       issue=m["issue"] if 'issue' in m else None)

    @staticmethod
    def builds(mods, repos, icons):
        '''Turns a `Repo` and yaml config file (list of dicts) into a `Mod`, which
        will be used in the templates.
        '''
        repos = { x.name: x for x in repos }

        return [ ModMeta.build(m, repos[m['repo']], icons[m['repo']])
                 for m in mods if 'issue' not in m ]

def update_icon(gh, repo_name, image_path=None, force=False):
    '''Downloads an image from the target repository, and scales
    it down to 16x16, and saves it. Doesn't do anything if the
    image exists.

    Returns the path to the image.
    '''
    if image_path is None or force:
        return None

    icon_name = repo_name.split("/")[1].lower().replace(" ", "-")
    icon_name = f"{icon_name}-icon"
    icon_path = f"images/{icon_name}.png"

    if Path(icon_path).exists():
        return icon_path

    data = b64decode(gh.get_repo(repo_name).get_contents(image_path).content)
    try:
        image = Image.open(BytesIO(data))
    except Exception as e:
        print(repo_name, ':ohno:', e)
        return None

    maxsize = (16, 16)
    image.thumbnail(maxsize, Image.ANTIALIAS)
    image.save(icon_path, "PNG")
    return icon_path


def update_icons(gh, mods):
    def update_mod(gh, mod):
        icon = mod['icon'] if 'icon' in mod else None
        return mod['repo'], update_icon(gh, mod['repo'], icon)
    return dict(update_mod(gh, m) for m in mods)

def build(token, path="src/mindustry-mods.yaml"):
    '''Builds the README.md out of everything else here.
    '''
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m['repo'] for m in mods])
    icons = update_icons(gh, mods)

    mods = ModMeta.builds(mods, repos, icons)
    mods = reversed(sorted(mods, key=lambda x: x.date))

    mods = list(mods)
    data = template.render(mods=mods)
    with open("README.md", 'w') as f:
        print(data, file=f)

    data = template_html.render(mods=mods)
    with open("index.html", 'w') as f:
        print(data, file=f)

    print("--- END ---")

def run():
    with open(Path.home() / ".github-token") as f:
        build(f.read())
    print()
    print()
    subprocess.run(['git', 'add', 'README.md'])
    print()
    subprocess.run(['git', 'commit', '-m', 'autogenerated'])
    print()
    subprocess.run(['git', 'push', 'origin', 'master'])

if __name__ == '__main__':
    with open(Path.home() / ".github-token") as f:
        build(f.read())

    schedule.every(2).hours.at(':00').do(run)

    while True:
        schedule.run_pending()
        time.sleep(1)
