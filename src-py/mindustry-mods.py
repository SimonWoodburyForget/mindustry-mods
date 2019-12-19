""" Python script to pull Mindustry mods relative to repo name.
This modules requires Python 3.7 or higher.

It uses Jinja2 for templating and eventually will use ClojureScript
instead, which is probably entirely overkill.
"""


from pathlib import Path
from collections import namedtuple
from collections import Counter
from datetime import datetime
from dataclasses import dataclass, asdict
from functools import partial
from typing import List, Dict, Optional, Set
import time

# Decoding/Encoding
import yaml
import json
import mson
import hjson
from mson import ParseError
from minfmt import ignore_sbrack
from base64 import b64decode, b64encode
import dateutil.parser
from PIL import Image
from io import BytesIO
import parsec

# Application Stuff
import github
from github import GithubException
import subprocess
import time
import schedule
import click
#import appdirs
import gitops as gop

# Generation
import humanize
import jinja2
import markdown
import re
import bs4
import urllib
from jinja2 import Markup

def try_init_pretty_errors():
    try:
        import pretty_errors as ppe
        ppe.configure(filename_display=ppe.FILENAME_EXTENDED)
    except ImportError:
        print("[error] pretty_errors module not found")
try_init_pretty_errors()
        
CACHE_PATH = Path.home() / ".github-cache"

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
    return Environment(loader=FileSystemLoader('templates/'),
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
    from parsec import optional, string, regex, none_of, many, ParseError

    glob = (optional(string('/'))
            >> string(repo_name)
            >> string("/blob/master/")
            >> many(none_of("?")).parsecmap(lambda x: "".join(x)))

    o = urlparse(url)
    if o.netloc == "raw.githubusercontent.com":
        return url

    try: path = glob.parse(o.path)
    except ParseError as e:
        path = None
    if o.netloc == "github.com" and path:
        return f"https://raw.githubusercontent.com/{repo_name}/master/{path}"

    if o.netloc == "":
        return f"https://raw.githubusercontent.com/{repo_name}/master/{o.path}"

    # print('[warning] non github url:', url)
    return url

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
    '''mod.json display name.'''
    displayName: str = None
    '''mod.json minimum game version.'''
    minGameVersion: str = None

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
            j['version'] = str(j['version'])

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
    sha: str
    '''Mod.json of repository.'''
    mod: Optional[ModInfo]
    '''README.md of the repository.'''
    readme: str
    '''A set of assets found in the repo.'''
    assets: Set[str]
    '''A set of contents found in the repo.'''
    contents: Set[str]

    @staticmethod
    def from_github(gh, name, old=None, force=False):
        '''Gets a Github repository from Github, with other
        data which may require a few requests, and packs this
        data into a namedtuple to be cached.
        '''

        try:
            repo = gh.get_repo(name)
        except GithubException as e:
            # repository gone?
            print(f"[error] get_repo {e.data['message']} -- {name}")
            return old

        sha = repo.get_branch("master").commit.sha
        if old and old.sha == sha and not force:
            print('[skipped] old hash --', name)
            return old
        print('[processing] new hash --', name)

        assets = gop.assets(repo)
        contents = gop.contents(repo) if 'content' in assets else set()

        return Repo(name,
                    stars=repo.stargazers_count,
                    date=repo.get_commit(sha).commit.author.date,
                    sha=sha,
                    mod=ModInfo.from_repo(repo),
                    readme=get_file(repo, "README.md"),
                    assets=assets,
                    contents=contents)

    def archive_link(self):
        return f"https://github.com/{self.repo}/archive/master.zip"

    def into_dict(self):
        '''Called when the object is about to be serialized.'''
        return { **asdict(self),
                 'date': str(self.date),
                 'assets': tuple(self.assets),
                 'contents': tuple(self.contents) }

    def from_dict(d):
        '''Called when the object is being deserialized.'''
        return Repo(**{ **d,
                        "date": dateutil.parser.parse(d["date"]),
                        "mod": ModInfo(**d["mod"]),
                        "assets": set(d["assets"]),
                        "contents": set(d["contents"]) })

def repos_cached(gh, mods, update=True, cache_path=CACHE_PATH):
    '''Gets repos if update is `True` and caches them,
    otherwise just reads the cached data.
    '''

    # TODO: implement better caching
    cache_path = Path(cache_path)
    if cache_path.exists():
        print('[log] path exists')
        with open(cache_path) as f:
            repos = [ Repo.from_dict(d) for d in json.load(f) ]
            old = { r.name: r for r in repos }
    else:
        print('[log] path not exist')
        repos = []
        old = {}

    if update:
        repos = [ Repo.from_github(gh, x, old[x] if x in old else None) for x in mods if x is not None]
        with open(cache_path, "w") as f:
            json.dump([ r.into_dict() for r in repos if r is not None ], f)
    return repos

@dataclass
class ModMeta:
    '''The ugly middle layer between Repo and Jinja2 and ClojureScript.
    '''

    name: str
    '''Link to repository.'''
    link: str
    '''Short description.'''
    desc: str
    '''Internal icon path.'''
    icon: str
    '''External icon path.'''
    icon_raw: str
    stars: int
    author: str
    date: datetime
    date_tt: float
    repo: str
    contents: List[str]
    assets: List[str]
    issue: str = None
    readme: str = ''
    version: str = ''
    '''Link to external official wiki.'''
    wiki: str = ''

    def icon_url(self):
        return f"https://raw.githubusercontent.com/{self.repo}/master/{self.icon_raw}"

    def readme_html(self):
        from markdown import markdown

        html = markdown(self.readme)
        soup = bs4.BeautifulSoup(html, 'html.parser')
        links = soup.find_all('img')
        links = [ (l['src'], fix_image_url(l['src'], self.repo)) for l in links ]

        for original, new in links:
            html = html.replace(original, new)
        return Markup(html)

    def header(self):
        from markdown import markdown

        html = markdown(self.readme)
        soup = bs4.BeautifulSoup(html, 'html.parser')
        links = soup.find_all('img')
        links = [ fix_image_url(l['src'], self.repo) for l in links ]
        if links:
            return links[0]
        else:
            return ''

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
        return Path('m') / (self.repo.replace('/', '--') + ".html")

    # def keywords(self):
    #     '''Keywords used to filter mods.'''
    #     return set(str(x for x in self.readme).split())

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
                       icon_raw=m['icon'] if 'icon' in m else '',
                       stars=r.stars,
                       author=author.strip(),
                       date=r.date,
                       issue=m["issue"] if 'issue' in m else None,
                       readme=r.readme or '',
                       version=r.mod.version,
                       assets=list(r.assets),
                       date_tt=time.mktime(r.date.timetuple()),
                       contents=list(r.contents),
                       wiki=m['wiki'] if 'wiki' in m else None)

    @staticmethod
    def builds(mods, repos, icons):
        '''Turns a `Repo` and yaml config file (list of dicts) into a `Mod`, which
        will be used in the templates.
        '''
        repos = { x.name: x for x in repos if x and x.name }

        return [ ModMeta.build(m, repos[m['repo']], icons[m['repo']])
                 for m in mods if 'issue' not in m ]

    def pack_data(self):
        '''Packs JSON data for the frontend.'''
        return { **{ k: v for k, v in asdict(self).items() if k not in ['date'] },
                 "date": str(self.date),
                 "header": self.header(),
                 # "keywords": self.keywords(),
                 "delta_ago": self.delta_ago() }

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

    try:
        data = b64decode(gh.get_repo(repo_name).get_contents(image_path).content)
    except GithubException as e:
        print(f"[error] update_icon -- {repo_name}")
        return None

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

def build(token, path="data/mindustry-mods.yaml", update=True):
    '''Builds the README.md out of everything else here.
    '''
    mods = loads(path)
    gh = github.Github(token)
    repos = repos_cached(gh, [ m['repo'] for m in mods], update=update)
    icons = update_icons(gh, mods)

    mods = ModMeta.builds(mods, repos, icons)
    mods = list(reversed(sorted(mods, key=lambda x: x.date)))

    jdata = [ mm.pack_data() for mm in mods ]
    jdata = json.dumps(jdata)

    with open("data/modmeta.1.0.json", 'w') as f:
        print(jdata, file=f)

    env = load_env()
    # with open("index.html", 'w') as f:
    #     # dumping JSON data straight into JS as b64 string to prevent XSS
        
    #     bdata = b64encode(jdata.encode("utf8")).decode('utf8')
        
    #     data = env.get_template('listing.html').render(mods=mods, data=bdata, style="src/style.css")
    #     print(data, file=f)

    with open("README.md", 'w') as f:
        data = env.get_template('listing.md').render(mods=mods, style="css/readme.css")
        print(data, file=f)

    # # with open("index.html", 'w') as f:
    # #     data = env.get_template('listing.html').render(mods=mods, style="src/style.css")
    # #     print(data, file=f)

    template = env.get_template('preview.html')
    for mod in mods:
        data = template.render(mod=mod, style="../css/readme.css")
        with open(mod.endpoint(), 'w') as f:
            print(data, file=f)

def main(push=True, update=True):
    with open(Path.home() / ".github-token") as f:
        build(f.read(), update=update)
        if not push: return
    print("--- END BUILD ---")
    print()
    print()
    subprocess.run(['git', 'add', 'README.md', 'index.html', 'images/*', 'm/*', 'data/*'])
    subprocess.run(['git', 'commit', '-m', 'autogenerated', '--author=bot'])
    subprocess.run(['git', 'push', 'origin', 'master'])
    print("--- END UPLOAD ---")
    print()
    print()

@click.command()
@click.option('-i', '--instant', is_flag=True, help="Run templates right away.")
@click.option('-p', '--push', is_flag=True, help="Push said changes to GitHub.")
@click.option('-h', '--hourly', is_flag=True, help="Keep running hourly.")
@click.option('-c', '--clean', is_flag=True, help="Clear cache and stuff.")
@click.option('-f', '--fast', is_flag=True, help="No update, just get to the end.")
def cli(instant, push, hourly, clean, fast):
    update = not fast

    if clean:
        subprocess.run(['rm', CACHE_PATH])

    main_run = lambda: main(push, update)

    if instant:
        main_run()

    if hourly:
        schedule.every(1).hour.at(':00').do(main_run)

        while True:
            schedule.run_pending()
            time.sleep(1)

if __name__ == '__main__':
    cli()
