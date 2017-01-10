---
layout: page
title: Tags
---

<div>
  <h4 class="inline">|--></h4>
  {% for tag in site.tags %}
  <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>
  {% endfor %}
</div>
<hr/>
<div>
  {% for tag in site.tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
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