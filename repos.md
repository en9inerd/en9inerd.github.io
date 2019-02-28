---
layout: page
title: Repos
permalink: /repos/
---

{% for repository in site.github.public_repositories %}{% if site.show_forks or repository.fork == false %}
  * [{{ repository.name }}]({{ repository.html_url }})<br />{{ repository.description }}{% endif %}{% endfor %}