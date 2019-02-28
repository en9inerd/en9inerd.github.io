---
title: Resume
layout: page
permalink: /resume/
redirect_from: /cv/
seo:
  type: person
---

{:style="text-align:right;"}
[Download as .pdf]({{ site.baseurl }}{% link /assets/files/Resume_VL.pdf %}){:.btn style="text-decoration:none;"}

## Summary

{% for punct in site.data.resume.summary %}
- {{ punct }}.{% endfor %}

## Skills Summary

| Skill        | Tool (if applicable) |
|:-------------|:---------------------|
{% for skill in site.data.resume.skills %}| {{ skill.type }} | {% for tool in skill.tools %}{{ tool }}{% unless forloop.last %}, {% endunless %}{% endfor %} |  
{% endfor %}

## Experience

{% assign positions=site.data.resume.positions | sort: "start_date" %}
{% for position in positions reversed %}

{% unless position.employer == previous_employer %}

### {{ position.employer }} ({{position.location}})

{% endunless %}

{:.pre-post}
{{ position.title }}
<time datetime="{{ position.start_date | date_to_xmlschema }}" style="display:block;text-align:right;">
  {{ position.start_date | date: '%B %Y' }} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>
{% for duty in position.duties %}
- {{ duty }}{% endfor %}
{% assign previous_employer=position.employer %}
<br />
{% endfor %}

## Education

{% for degree in site.data.resume.degrees %}

### {{ degree.school }}

{{ degree.degree }}
<time datetime="{{ degree.date | date_to_xmlschema }}" style="display:block;text-align:right;">{% if degree.GPA %}GPA: {{ degree.GPA }}{% endif %}&nbsp;&nbsp;&nbsp;&nbsp;Graduated: {{ degree.date | date: "%B %Y" }}</time>
<br />
{% endfor %}

## Projects

{% for project in site.data.resume.projects %}

### {{ project.name }}

<time datetime="{{ project.start_date | date_to_xmlschema }}" style="display:block;text-align:right;">
  {{ project.start_date | date: '%B %Y' }} &mdash; {% if project.end_date %}{{ project.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>  
{{ project.desc }}    
<span class="pre-post">Used:</span> {{ project.used | join: ', ' }}<br />
<br />
{% endfor %}