'''Module for getting metadata about repository. (generated data about cached data)'''
from dataclasses import dataclass, asdict
from datetime import datetime
from typing import List, Dict, Optional, Set
from pathlib import Path
import time
import bs4
import humanize
from jinja2 import Markup
import re
import functools

from minfmt import ignore_sbrack
from caching.ghrepo import repos_cached
from config import gh

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

    return url

def fix_urls(md, repo_name):
    def on_match(link):
        desc = link.group(1)
        old = link.group(2)
        href = fix_image_url(link.group(2), repo_name)
        old, new = f'[{desc}]({old})', f'[{desc}]({href})'
        if repo_name == "AeronGreva/AeroMindustry":
            print(old, new)
        return old, new

    replacers = set((on_match(x) for x in re.finditer(r'\[([^\]\[]*)\]\(([^\)]*)\)', md)))
    return functools.reduce(lambda md, x: md.replace(x[0], x[1]), replacers, md)

@dataclass
class ModMeta:
    '''The front for the various data cachers. Handles special cases that 
    don't specifically need to be cached or know about each other.'''

    '''mod name'''
    name: str
    '''mod name with markup.'''
    name_markup: str
    '''Link to repository.'''
    link: str
    '''Short description.'''
    desc: str
    '''Short description, raw markup.'''
    desc_markup: str
    '''Icon relative the mods repository.'''
    icon: Optional[str]
    stars: int
    author: str
    '''author name with markup.'''
    author_markup: str
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

    def __repr__(self):
        return f"ModMeta(name=\"{self.name}\", date=\"{self.date}\")"
    
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
    def build(repo_obj, icon):
        def parse_or_nothing(x):
            return ignore_sbrack.parse(x or "")

        r = repo_obj
        mods_name = parse_or_nothing(r.mod.name) if r.mod.name else r.name
        mods_desc = parse_or_nothing(r.mod.description)
        author = parse_or_nothing(r.mod.author)
        mindustry_name = r.name.split("/")[1].lower().replace(" ", "-")

        return ModMeta(name=mods_name,
                       name_markup=r.mod.displayName or r.mod.name,
                       link=f"https://github.com/{r.name}",
                       repo=r.name,
                       desc=mods_desc,
                       desc_markup=r.mod.description,
                       icon=icon,
                       stars=r.stars,
                       author=author.strip(),
                       author_markup=r.mod.author,
                       date=r.date,
                       issue=None,
                       readme=fix_urls(r.readme or '', r.name),
                       version=r.mod.version,
                       assets=list(r.assets),
                       displayName=r.mod.displayName,
                       date_tt=time.mktime(r.date.timetuple()),
                       contents=list(r.contents),
                       wiki=None)

    @staticmethod
    def builds(repo_objs, icons):
        return [ ModMeta.build(x, icons[x.name])
                 for x in repo_objs ]

    def pack_data(self):
        '''Packs JSON data for the frontend.'''
        return { **{ k: v for k, v in asdict(self).items() if k not in ['date'] },
                 "date": str(self.date),
                 "header": self.header() }
