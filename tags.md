---
layout: page
title: Tags
permalink: /tags/
---

{%- assign sorted_tags = site.tags | sort %}
<div class="post-info">
  <span>[
  {%- for tag in sorted_tags %}
    <a href="#{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }}</a>{% unless forloop.last %},{% endunless %}
  {%- endfor %} ]
  </span>
</div>
<hr/>
<div class="tags">
{%- for tag in sorted_tags %}
  <h2 id="{{ tag[0] | slugify: 'pretty' }}">{{ tag[0] }}</h2>
  <ul>
  {%- for post in tag[1] %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
      <small><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string: "ordinal", "US" }}</time></small>
    </li>
  {%- endfor %}
  </ul>
{%- endfor %}
</div>
