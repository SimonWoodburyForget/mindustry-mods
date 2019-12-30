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
import dateutil.parser
import parsec

# Application Stuff
import github
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
from jinja2 import Markup

from caching.ghrepo import repos_cached
from caching.icons import update_icons
from config import CACHE_PATH


# def try_init_pretty_errors():
#     try:
#         import pretty_errors as ppe
#         ppe.configure(filename_display=ppe.FILENAME_EXTENDED)
#     except ImportError:
#         print("[error] pretty_errors module not found")
# try_init_pretty_errors()

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
    '''UTC time stamp epoch in seconds.'''
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

    def endpoint(self, path=Path("./")):
        return path / Path('m') / (self.repo.replace('/', '--') + ".html")

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

def update_data(path, jdata):
    def copy(a, b):
        with open(path/a) as a, open(path/b, 'w') as b:
            print(a.read(), file=b)

    # backup data before copying
    copy('data/modmeta.1.0.json',
         'data/modmeta.1.0.json.auto-bak')
            
    # update modmeta to with new data
    with open(path/"data/modmeta.1.0.json", 'w') as f:
        print(jdata, file=f)

    # run tests
    # revert on error
    try:
        subprocess.check_output(['cargo', 'test'])
    except subprocess.CalledProcessError as e:
        print()
        print(e)
        print()
        print("[error] cargo test failed...")

        try:
            copy('data/modmeta.1.0.json.auto-bak',
                 'data/modmeta.1.0.json')
        except FileNotFoundError:
            pass
    
def build(token, path, update=True):
    '''Builds the README.md out of everything else here.
    '''
    path = Path(path)
    yaml_path = path/"data/mindustry-mods.yaml"
    
    mods = loads(yaml_path)
    gh = github.Github(token)

    repos = repos_cached(gh, [ m['repo'] for m in mods], update=update)
    icons = update_icons(path, gh, mods)

    mods = ModMeta.builds(mods, repos, icons)
    mods = list(reversed(sorted(mods, key=lambda x: x.date)))

    jdata = [ mm.pack_data() for mm in mods ]
    jdata = json.dumps(jdata)

    update_data(path, jdata)

    env = load_env()
    with open(path/"README.md", 'w') as f:
        data = env.get_template('listing.md').render(mods=mods, style="css/readme.css")
        print(data, file=f)

    template = env.get_template('preview.html')
    for mod in mods:
        data = template.render(mod=mod, style="../css/readme.css")
        with open(mod.endpoint(path), 'w') as f:
            print(data, file=f)

def main(path, push=True, update=True):
    path = Path(path)

    with open(Path.home()/".github-token") as f:
        build(f.read(), path, update=update)
        if not push: return

    print("--- END BUILD ---")
    print()
    print()

    subprocess.run(['git', 'add', path/'README.md', path/'data/modmeta*', path/'images/*', path/'m/*'])
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
@click.option('-d', '--path', help="Path to root of directory.")
def cli(instant, push, hourly, clean, fast, path):
    if path is None:
        print("--path is missing")
        return

    update = not fast

    if clean:
        subprocess.run(['rm', CACHE_PATH])

    main_run = lambda: main(path, push, update)

    if instant:
        main_run()

    if hourly:
        schedule.every(1).hour.at(':00').do(main_run)

        while True:
            schedule.run_pending()
            time.sleep(1)

if __name__ == '__main__':
    cli()
