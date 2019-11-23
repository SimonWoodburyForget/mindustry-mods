""" Python script to pull Mindustry mods relative to repo name.
This modules requires Python 3.7 or higher.
"""

# Data Structures
from pathlib import Path
from collections import namedtuple
from collections import Counter
from datetime import datetime
from dataclasses import dataclass, asdict
from functools import partial
from typing import List, Dict, Optional

# Decoding/Encoding
import yaml
import json
import mson
import hjson
from mson import ParseError
from minfmt import ignore_sbrack
from base64 import b64decode
import dateutil.parser
from PIL import Image
from io import BytesIO

# Application Stuff
import github
from github import GithubException
import subprocess
import time
import schedule
import click
#import appdirs

# Generation
import humanize
import jinja2
import markdown
import re
import bs4
import urllib

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

def load_env():
    from jinja2 import Environment, FileSystemLoader, select_autoescape
    return Environment(loader=FileSystemLoader('src/templates/'),
                       autoescape=select_autoescape(['html']))

def try_hjson(text):
    try:
        return hjson.loads(text)
    except hjson.scanner.HjsonDecodeError as e:
        print(f"[error] Hjson error {e}")

def try_mson(text):
    try:
        return mson.jsonc.parse(text)
    except ParseError as e:
        print(f"[error] Mson error {e}")

def get_file(repo, filename):
    '''Gets one file from a repository and returns it as a string or None.'''
    try:
        return b64decode(repo.get_contents(filename).content).decode('utf8')
    except GithubException as e:
        print(f"[error] unable to find {filename} in {repo.name}")

def fix_image_url(url, repo_name):
    '''Fixes a GitHub url, where the url should point to an image.

    Any links with `github.com` are invalid, because they're html links, while
    image links would have `githubusercontent.com`, for example: 
    - https://github.com/Retrothopter/Niobium-Nanotech/blob/master/Preview.png;

    Any links that don't have a domain are relative and as such invalid, for example:
    - preview.png;
    - sprites/preview.png;
    - /sprites/preview.png

    This is also why a repo name is required.
    '''
    from urllib.parse import urlparse
    o = urlparse(url)
    # if o.netloc.contains("githubusercontent.com")

    
    pass
        
@dataclass
class ModInfo:
    '''Raw mod.json data.'''

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

    @staticmethod
    def from_repo(repo):
        '''Get's mod.json from a specific repo.'''
        text = get_file(repo, "mod.json")
        if text is None:
            return ModInfo()
        return ModInfo.from_text(text)

    @staticmethod
    def from_text(text):
        j = try_hjson(text) or try_mson(text) or None

        # version should always be a string
        # but it may endup being a number
        if 'version' in j:
            j['version'] = str(j)

        if j is not None:
            return ModInfo(**j)
        else:
            print(f"[error] unable to parse mod.json")
            return ModInfo()
    
@dataclass
class Repo:
    '''Raw untouched data from the repository.
    '''

    '''Repo endpoint.'''
    name: str
    '''Number of stargazers.'''
    stars: int
    '''Last commit date.'''
    date: datetime
    '''Last commit hash.'''
    sha: str = None
    '''Mod.json of repository.'''
    mod: Optional[ModInfo] = None
    '''README.md of the repository.'''
    readme: str = None

    @staticmethod
    def from_github(gh, name, old=None, force=False):
        '''Gets a Github repository from Github, with other
        data which may require a few requests, and packs this
        data into a namedtuple to be cached.
        '''

        repo = gh.get_repo(name)
        sha = repo.get_branch("master").commit.sha
        if old and old.sha == sha and not force:
            print('[skipped]', name, "-- nothing new")
            return old
        
        return Repo(name,
                    stars=repo.stargazers_count,
                    date=repo.get_commit(sha).commit.author.date,
                    sha=sha,
                    mod=ModInfo.from_repo(repo),
                    readme=get_file(repo, "README.md"))

    def into_dict(self):
        '''Called when the object is about to be serialized.
        ''' # mostly just handles date I guess.
        return { k: str(v) if k == 'date' else v
                 for k, v in asdict(self).items() }

    def from_dict(d):
        '''Called when the object is being deserialized.
        '''
        return Repo(**{ **d,
                        "date": dateutil.parser.parse(d["date"]),
                        "mod": ModInfo(**d["mod"]) })

CACHE_PATH = Path.home() / ".github-cache"

def repos_cached(gh, mods, update=True, cache_path=CACHE_PATH):
    '''Gets repos if update is `True` and caches them,
    otherwise just reads the cached data.
    '''

    # TODO: implement better caching
    cache_path = Path(cache_path)
    if cache_path.exists():
        with open(cache_path) as f:
            repos = [ Repo.from_dict(d) for d in json.load(f) ]
            old = { r.name: r for r in repos }
    else:
        repos = []
        old = {}

    if update:
        repos = [ Repo.from_github(gh, x, old[x] if x in old else None) for x in mods ]
        with open(cache_path, "w") as f:
            json.dump([ r.into_dict() for r in repos ], f)
    return repos

@dataclass
class ModMeta:
    '''Middle man between Repo and template, where everything can get formatted.
    '''

    name: str
    link: str
    desc: str
    icon: str
    stars: int
    author: str
    date: datetime
    repo: str
    issue: str = None
    readme: str = ''

    def readme_html(self):
        from jinja2 import Markup
        from markdown import markdown
        '''
        def process(url):
            from urllib.parse import urlparse
            o = urlparse(url)

            def parse_find_string(string):
                def parse(data):
                    print(data, string)
                    result = data.find(string)
                    return result >= 0, result + len(string)
                return parse

            master = parse_find_string('/blob/master/')
            result = master(o.path.decode('utf8'))
            if result[0]:
                path = o.path[:result[1]]
                return f"https://raw.githubusercontent.com/{self.repo}/{path}"

            if url.netloc == '':
                return f"https://raw.githubusercontent.com/{self.repo}/{o.path}"
            return 
        '''

        html = markdown(self.readme)
        soup = bs4.BeautifulSoup(html, 'html.parser')
        links = soup.find_all('img')
        links = [ (l, fix_image_url(l.src, self.repo)) for l in links ]
        '''
        print(links)
        '''
        return Markup(html)

    def stars_fmt(self):
        return self.stars * '★ ' if self.stars else '☆'

    def author_fmt(self):
        return f"by {self.author}" if self.author else ""

    def md_icon(self):
        return f'![]({self.icon})' if self.icon is not None else ''

    def delta_ago(self):
        dt = datetime.utcnow() - self.date
        return humanize.naturaldelta(dt)

    def archive_link(self):
        return f"https://github.com/{self.repo}/archive/master.zip"

    def endpoint(self):
        return Path('m') / (self.name.lower().replace(' ', '-').split('/')[-1] + ".html")

    @staticmethod
    def build(m, r, icon):
        def parse_or_nothing(x):
            return ignore_sbrack.parse(x or "")

        repo_name = m["repo"]
        mods_name = parse_or_nothing(r.mod.name) if r.mod.name else m["repo"]
        mods_desc = parse_or_nothing(r.mod.description) if 'about' not in m else m['about']
        author = parse_or_nothing(r.mod.author) if 'author' not in m else m['author']
        mindustry_name = repo_name.split("/")[1].lower().replace(" ", "-")

        return ModMeta(name=mods_name,
                       link=f"https://github.com/{repo_name}",
                       repo=m['repo'],
                       desc=mods_desc,
                       icon=icon,
                       stars=r.stars,
                       author=author.strip(),
                       date=r.date,
                       issue=m["issue"] if 'issue' in m else None,
                       readme=r.readme or '')

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

def build(token, path="src/mindustry-mods.yaml", update=True):
    '''Builds the README.md out of everything else here.
    '''
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m['repo'] for m in mods], update=update)
    icons = update_icons(gh, mods)

    mods = ModMeta.builds(mods, repos, icons)
    mods = reversed(sorted(mods, key=lambda x: x.date))

    env = load_env()
    mods = list(mods)
    data = env.get_template('listing.md').render(mods=mods, style="src/style.css")
    with open("README.md", 'w') as f:
        print(data, file=f)

    data = env.get_template('listing.html').render(mods=mods, style="src/style.css")
    with open("index.html", 'w') as f:
        print(data, file=f)
    
    template = env.get_template('preview.html')
    for mod in mods:
        data = template.render(mod=mod, style="../src/style.css")
        with open(mod.endpoint(), 'w') as f:
            print(data, file=f)

def main(push=True, update=True):
    with open(Path.home()  /".github-token") as f:
        build(f.read(), update=update)
    print("--- END BUILD ---")
    print()
    print()
    if not push: return
    subprocess.run(['git', 'add', 'README.md', 'index.html', 'images/*', 'm/*'])
    subprocess.run(['git', 'commit', '-m', 'autogenerated', '--author=bot'])
    subprocess.run(['git', 'push', 'origin', 'master'])
    print("--- END UPLOAD ---")
    print()
    print()

@click.command()
@click.option('-i', '--instant', is_flag=True, help="Run templates right away.")
@click.option('-u', '--update', is_flag=True, help="Run updates right away.")
@click.option('-p', '--push', is_flag=True, help="Push said changes to GitHub.")
@click.option('-h', '--hourly', is_flag=True, help="Keep running hourly.")
@click.option('-c', '--clean', is_flag=True, help="Clear cache and stuff.")
def cli(instant, push, hourly, clean, update):
    if clean:
        subprocess.run(['rm', CACHE_PATH])

    main_run = lambda: main(push, update=not instant)

    if instant:
        main_run()

    if hourly:
        schedule.every(1).hour.at(':00').do(main_run)

        while True:
            schedule.run_pending()
            time.sleep(1)

if __name__ == '__main__':
    cli()
