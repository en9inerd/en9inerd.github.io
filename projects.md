---
layout: page
title: Projects
permalink: /projects/
---

{% for repository in site.github.public_repositories %}{% unless repository.fork %}
  * [{{ repository.name }}]({{ repository.html_url }})<br />{{ repository.description }}{% endunless %}{% endfor %}