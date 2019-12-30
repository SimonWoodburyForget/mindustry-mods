'''Module for caching icons and icon paths.'''
from github import GithubException
from base64 import b64decode
from PIL import Image
from io import BytesIO

def update_icon(path, gh, repo_name, image_path=None, force=False):
    '''Downloads an image from the target repository, and scales
    it down to 16x16, and saves it. Doesn't do anything if the
    image exists.

    Returns the path to the image for frontend. 
    ''' # TODO: split this into two functions
    if image_path is None or force:
        return None

    icon_name = repo_name.split("/")[1].lower().replace(" ", "-")
    icon_name = f"{icon_name}-icon"
    icon_path = f"images/{icon_name}.png"

    if (path / icon_path).exists():
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
    image.save(path / icon_path, "PNG")
    return icon_path

def update_icons(path, gh, mods):
    def update_mod(gh, mod):
        icon = mod['icon'] if 'icon' in mod else None
        return mod['repo'], update_icon(path, gh, mod['repo'], icon)
    return dict(update_mod(gh, m) for m in mods)
