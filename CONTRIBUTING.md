# Adding Mods to the Listing


To add your or any mod to the listing, all that is required
is adding an entry into
[`data/mindustry-mods.yaml`](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/data/mindustry-mods.yaml). The smallest entry could look like this:

```yaml
---
repo: User/Repo
icon: sprites/blocks/nice-block.png
...
```
  
An `icon` path is optional, and when added gives the entry 
an icon by downloading said image and resizing it automatically.

-------------------------------------------------------------

## Other Fields

The Yaml configuration file is formatted as follows:

```yaml
---
repo: User/Repo
issue: zipped incorrectly
author: Author Name
name: Mod Name
about: Description about the mod.
...
```

Documents are separated by `---`, and the file is
ended with `...`, with the following fields:

- `repo`: the repository to pull the mod.json from;

- `issue`: if present, the mod wont be rendered,
  and the string mostly exists as a reminder;

- `author`: if present, the mod's author name
  will be overwritten;

- `name`: if present, the mod's name will be
  overwritten;

- `about`: if present, the mod's description
  will be overwritten;

- `icon`: path in the project of the icon
  to be used.
