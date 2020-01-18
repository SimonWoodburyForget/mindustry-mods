# Adding Mods to the Listing

Mods will be added to the listing automatically if your mod is found
by GitHub while searching for `mindustry mods`, but if further
configuration is required (missing icons, bad descriptions, etc)
somethings can be overridden from the local configuration file in 
[`data/mindustry-mods.yaml`](https://github.com/SimonWoodburyForget/mindustry-mods/blob/master/mindustry-mods.yaml). 

You can put your icon at `icon.png` *(at the root of your
project)* in your repository, and it'll get picked up
automatically.

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
