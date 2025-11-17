+++
title = "Simple DotFiles Manager"
date = 2025-08-22T19:19:00-04:00

[taxonomies]
tags = ["bash", "dotfiles"]
+++

[[ GitHub Repo ]](https://github.com/en9inerd/sdfm)

Usually, people use Chezmoi, Mackup, YADM, or similar tools to manage dotfiles. I’ve found those solutions overkill for most of my use cases, and a bare Git repository felt unsafe because there’s no safe way to sync changes and create backups before applying them. By “unsafe,” I mean there’s a risk of accidentally damaging `$HOME`.

So I wrote sdfm, a tiny dotfiles manager in Bash. It keeps a safe sync/backup directory, lets you manage host-specific setups via branches, and supports simple versioning with Git tags — just enough to replace a fragile bare-Git workflow without adding unnecessary complexity.
