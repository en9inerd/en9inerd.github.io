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
{% assign experience=site.data.cv.experience | sort: "start_date" %}
{% for exp in experience reversed %}

{% unless exp.employer == previous_employer %}
### {{ exp.employer }} · {{exp.location}}
{% endunless %}

#### {{ exp.title }}

<div><time datetime="{{ exp.start_date | date_to_xmlschema }}" class="smaller">{{ exp.start_date | date: '%B %Y' }}{% if exp.start_date != exp.end_date %} &mdash; {% if exp.end_date %}{{ exp.end_date | date: '%B %Y' }}{% else %}Present{% endif %}{% endif %}</time></div>
{% for duty in exp.responsibilities %}
- {{ duty }}{% endfor %}
{% assign previous_employer=exp.employer %}
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
{% assign education=site.data.cv.education | sort: "date" %}
{% for degree in education reversed %}

### {{ degree.school }}

#### {{ degree.degree }}

<div><time datetime="{{ degree.date | date_to_xmlschema }}" class="smaller">{{ degree.date | date: "%B %Y" }}</time></div>
{% endfor %}
</div>
</div>
