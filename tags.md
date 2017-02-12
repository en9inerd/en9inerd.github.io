---
layout: page
title: Tags
---

<div>
  <span class="pre-post">|--> [
  {% for tag in site.tags %}
  <a href="#{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }}</a>{% unless forloop.last %},{% endunless %}
  {% endfor %}
  ]
  </span>
</div>
<hr/>
<div>
  {% for tag in site.tags %}
  <h2 id="{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }}</h2>
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