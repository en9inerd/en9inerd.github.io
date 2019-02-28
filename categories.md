---
layout: page
title: Categories
permalink: /categories/
---

<div class="post-info">
  <span>[
  {% for category in site.categories %}
    <a href="#{{ category[0] | slugify: 'pretty' }}">{{ category[0] }}</a>{% unless forloop.last %},{% endunless %}
  {% endfor %}]
  </span>
</div>
<hr/>
<div>
{% for category in site.categories %}
  <h2 id="{{ category[0] | slugify: 'pretty' }}">{{ category[0] }}</h2>
  <ul>
  {% for post in category[1] %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
      <small><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string: "ordinal", "US" }}</time></small>
    </li>
  {% endfor %}
  </ul>
{% endfor %}
</div>