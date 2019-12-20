'''PyGitHub operations.'''

ASSETS = set(x.strip() for x in '''
content
bundles
sounds
schematics
sprites-override
sprites
scripts
'''.split('\n'))

CONTENTS = set(x.strip() for x in '''
items
blocks
mechs
liquids
units
zones
'''.split('\n'))

def assets(repo):
    '''Returns a set of assets found in repository.'''
    res = repo.get_dir_contents("/")
    return set(x.name for x in res if x.name in ASSETS)

def contents(repo):
    '''Returns a set of contents found in repository.'''
    res = repo.get_dir_contents("/content")
    return set(x.name for x in res if x.name in CONTENTS)
