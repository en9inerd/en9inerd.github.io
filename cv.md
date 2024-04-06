---
title: Curriculum Vitae
layout: page
permalink: /cv/
redirect_from: /resume/
seo:
  type: person
---

<div class="cv">
<p class="cv-btn">
  <a href="{{ '/assets/files/Curriculum_Vitae_VL.pdf' | relative_url }}" class="btn">Download as .pdf</a>
</p>

## Summary

{% for punct in site.data.cv.summary %}
- {{ punct }}{% endfor %}

## Skills Summary

| Category     | Skills               |
|-------------:|:---------------------|
{% for skill in site.data.cv.skills %}| **{{ skill.type }}** | {% for tool in skill.tools %}{{ tool }}{% unless forloop.last %}, {% endunless %}{% endfor %} |  
{% endfor %}

## Experience

<div class="cv-experience">
{% assign positions=site.data.cv.positions | sort: "start_date" %}
{% for position in positions reversed %}

{% unless position.employer == previous_employer %}
### {{ position.employer }} · {{position.location}}
{% endunless %}

#### {{ position.title }}

<div><time datetime="{{ position.start_date | date_to_xmlschema }}" class="smaller">{{ position.start_date | date: '%B %Y' }}{% if position.start_date != position.end_date %} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}{% endif %}</time></div>
{% for duty in position.duties %}
- {{ duty }}{% endfor %}
{% assign previous_employer=position.employer %}
{% endfor %}
</div>

## Personal Projects

<div class="cv-projects">
{% assign projects=site.data.cv.projects | sort: "start_date" %}
{% for project in projects reversed %}

### {{ project.name }}{% if project.link %} · [{{ project.link.text }}]({{ project.link.url }}){% endif %}

#### Used: {{ project.technologies | join: ', ' }}

<div><time datetime="{{ project.start_date | date_to_xmlschema }}" class="smaller">{{ project.start_date | date: '%B %Y' }}{% if project.start_date != project.end_date %} &mdash; {% if project.end_date %}{{ project.end_date | date: '%B %Y' }}{% else %}Present{% endif %}{% endif %}</time></div>

{{ project.desc }}

{% endfor %}
</div>

## Education

<div class="cv-education">
{% assign degrees=site.data.cv.degrees | sort: "date" %}
{% for degree in degrees reversed %}

### {{ degree.school }}

#### {{ degree.degree }}

<div><time datetime="{{ degree.date | date_to_xmlschema }}" class="smaller">{{ degree.date | date: "%B %Y" }}</time></div>
{% endfor %}
</div>
</div>
