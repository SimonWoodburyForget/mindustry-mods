'''Module for caching icons and icon paths.'''
from github import GithubException
from base64 import b64decode

import json
import hashlib
import time
from pathlib import Path

from config import CACHE_DIR

CACHE_PATH = CACHE_DIR/"images.json"

def update_icon(path, gh, repo_name, image_path=None, skip=False, cache_time=60*60*24):
    '''Downloads an image from the target repository, and runs it through sha256
    which is then used to verify whether the icon changed or not.

    The icon hash and path are cached locally, with the time cached by this function,
    relative to the root path argument.

    Returns a path (as a `str`) to the icon in the target repository if the icon exists,
    otherwise returns `None`.
    '''
    if skip:
        return None
    
    if not CACHE_PATH.exists():
        cache_data = {}
    else:
        with open(CACHE_PATH) as f:
            cache_data = json.load(f)

    if repo_name not in cache_data:
        cache_data[repo_name] = {}
    repo_data = cache_data[repo_name]

    # checks if icon exists and if it's old enough to consider updating
    if "icon-hash" in repo_data:
        old = repo_data["icon-path"]
        cached_time = time.time() - repo_data["time-cached"]
        if not cached_time > cache_time:
            return old

    try:
        gh_repo = gh.get_repo(repo_name)
    except GithubException as e:
        print(f"[error] on gh.get_repo(..)")
        print(f"        repo: {repo_name}")
        print(f"        exception: {e}")
        return None
    
    if image_path:
        data, data_path = _get_icon(gh_repo, image_path)
    else:
        data, data_path = _get_icon(gh_repo, "icon.png")

    if data is not None:
        m = hashlib.sha256()
        m.update(data)
        data = m.hexdigest()

    cache_data[repo_name] = { "icon-hash": data,
                              "icon-path": data_path,
                              "time-cached": time.time() }

    with open(CACHE_PATH, "w") as f:
        json.dump(cache_data, f)

    return data_path

def _get_icon(gh_repo, path):
    '''Returns image as bytes, with path, if no errors occur, 
    otherwise returns (None, None) which can be cached to keep 
    track of what we didn't find.'''
    try:
        # decode, because we need bytes anyways
        return b64decode(gh_repo.get_contents(path).content), path
    except GithubException as e:
        return None, None

def update_icons(path, gh, mods):
    def update_mod(gh, mod):
        icon = mod['icon'] if 'icon' in mod else None
        return mod['repo'], update_icon(path, gh, mod['repo'], icon)
    return dict(update_mod(gh, m) for m in mods)
