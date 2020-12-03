'''Global configuration objects.'''
from pathlib import Path
import os
import github

from common import MOD_VERSION

MOD_META_VERSION = MOD_VERSION

try:
    GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
except KeyError:
    GITHUB_TOKEN = none

WEB_DIR = Path("/web") / "mindustry-mods"

CACHE_PATH = WEB_DIR / "cache"
STATIC_DIR = WEB_DIR / "www" / "static"
DATA_PATH = STATIC_DIR / "data"

IMAGES_JSON = CACHE_PATH / "images.json"
GITHUB_REPO_CACHE_PATH = CACHE_PATH / "github-repo-cache.json"
SHA_CACHE_PATH = CACHE_PATH / "sha.json"

DATA_PATH.mkdir(exist_ok=True)
CACHE_PATH.mkdir(exist_ok=True)

gh = github.Github(GITHUB_TOKEN)
