# Services

This file contains `.service` files for systemd to start the scripts automatically. Additionally an environment file (`/web/mindustry-mods/secrets.env`) is required for the scripts containing `GITHUB_TOKEN="<token>"`, and it's alse possible to pass `--un-authenticated` to run without a github token, although the rate limit will likely be insufficient.
