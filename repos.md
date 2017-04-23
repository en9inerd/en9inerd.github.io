---
layout: page
title: Repos
permalink: /repos/
---

{% for repository in site.github.public_repositories %}{% unless repository.fork %}
  * [{{ repository.name }}]({{ repository.html_url }})<br />{{ repository.description }}{% endunless %}{% endfor %}