'''Global configuration objects.'''
from pathlib import Path
import os
import github

# Version number for data, to allow multiple version of data at once,
# which unavoidably may eventually happen, because of caching.
MOD_META_VERSION = "3.2"

GITHUB_TOKEN = os.environ['GITHUB_TOKEN']

WEB_DIR = Path("/web") / "mindustry-mods"
CACHE_PATH = WEB_DIR / "cache"
IMAGES_JSON = CACHE_PATH / "images.json"
GITHUB_REPO_CACHE_PATH = CACHE_PATH / "github-repo-cache.json"
SHA_CACHE_PATH = CACHE_PATH / "sha.json"
DATA_PATH = WEB_DIR / "www" / "data"

DATA_PATH.mkdir(exist_ok=True)
(WEB_DIR / "cache").mkdir(exist_ok=True)

gh = github.Github(GITHUB_TOKEN)
