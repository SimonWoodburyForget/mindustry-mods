
Visit the webpage at: https://simonwoodburyforget.github.io/mindustry-mods/

A list of mods, ordered by most recently committed. *Each `★` is 1 star.*

{% for mod in mods %}
  - *{{ mod.delta_ago()  }} ago* [{{ mod.repo }}]({{ mod.link }}) {{ mod.md_icon() }} {{ mod.author_fmt() }} -- {{ mod.stars_fmt() }} -- {{ mod.desc.split("\n")[0] }}
{% endfor %}
