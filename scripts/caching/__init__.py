'''Module for getting metadata about repository. (generated data about cached data)'''
from dataclasses import dataclass, asdict
from datetime import datetime
from typing import List, Dict, Optional, Set
from pathlib import Path
import time
import bs4
import humanize
from jinja2 import Markup

from minfmt import ignore_sbrack
from caching.ghrepo import repos_cached
from caching.icons import update_icons

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
    '''The front for the various data cachers. Handles special cases that 
    don't specifically need to be cached or know about each other.'''

    '''mod name'''
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
    '''markup encoded name'''
    displayName: Optional[str]
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
                       displayName=r.mod.displayName,
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

def modsmeta(path, gh, mods, update):
    '''Takes PyGitHub instance and the mods-yaml data, and returns a modmeta, 
    which is generated data from what has been cached.'''
    repos = repos_cached(gh, [ m['repo'] for m in mods], update=update)
    icons = update_icons(path, gh, mods)

    mods = ModMeta.builds(mods, repos, icons)
    return list(reversed(sorted(mods, key=lambda x: x.date)))
