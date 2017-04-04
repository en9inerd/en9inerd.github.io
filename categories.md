---
layout: page
title: Categories
---

<div>
  <span class="pre-post">~/ [
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
      <a href="{{ site.baseurl }}{{ post.url }}">
      {{ post.title }}
        <small><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string }}</time></small>
      </a>
    </li>
  {% endfor %}
  </ul>
{% endfor %}
</div>