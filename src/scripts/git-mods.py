'''Script to use Git directly.'''

from pathlib import Path

@dataclass
class Mod:
    '''Dataclass for mods.'''

    '''GitHub URL endpoint.'''
    repo: Path


@dataclass
class Bot:
    pass
