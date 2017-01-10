---
layout: page
title: Projects
permalink: /projects/
---

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})<br />{{ repository.description }}{% endfor %}