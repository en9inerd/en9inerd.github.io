---
layout: page
title: Projects
permalink: /projects/
repo_names:
  - "tgeraser"
  - "telebuilder"
  - "jekyll-post-bot"
  - "gromozeka-bot"
  - "cors-proxy"
---

{% for repo_name in page.repo_names %}
  {% assign repository=site.github.public_repositories | where: "name", repo_name | first %}
  * [{{ repository.name }}]({{ repository.html_url }})<br />{{ repository.description }}
  {:style="margin-top:1em;"}
{% endfor %}
