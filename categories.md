---
layout: page
title: Categories
---

<div>
  <h4 class="inline">~/</h4>
  {% for category in site.categories %}
  <a href="#{{ category[0] | slugify }}">{{ category[0] }}</a>
  {% endfor %}
</div>
<hr/>
<div>
  {% for category in site.categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">
      {{ post.title }}
      <small class="date">{{ post.date | date_to_string }}</small>
      </a>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>