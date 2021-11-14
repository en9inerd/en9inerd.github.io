---
title: Resume
layout: page
permalink: /resume/
redirect_from: /cv/
seo:
  type: person
---

{:style="text-align:right;"}
[Download as .pdf]({{ '/assets/files/Resume_VL.pdf' | relative_url  }}){:.btn}

## Summary

{% for punct in site.data.resume.summary %}
- {{ punct }}.{% endfor %}

{:style="margin-top:40px;"}
## Skills Summary

| Skill        | Tool (if applicable) |
|:-------------|:---------------------|
{% for skill in site.data.resume.skills %}| {{ skill.type }} | {% for tool in skill.tools %}{{ tool }}{% unless forloop.last %}, {% endunless %}{% endfor %} |  
{% endfor %}

{:style="margin-top:40px;"}
## Experience

{% assign positions=site.data.resume.positions | sort: "start_date" %}
{% for position in positions reversed %}

{% unless position.employer == previous_employer %}

### {{ position.employer }} ({{position.location}})

{% endunless %}

{:.pre-post}
{{ position.title }}
<time datetime="{{ position.start_date | date_to_xmlschema }}" style="display:block;">
  {{ position.start_date | date: '%B %Y' }} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>
{% for duty in position.duties %}
- {{ duty }}{% endfor %}
{% assign previous_employer=position.employer %}
<br />
{% endfor %}

## Education

{% assign degrees=site.data.resume.degrees | sort: "date" %}
{% for degree in degrees reversed %}

### {{ degree.school }}

{{ degree.degree }}
<time datetime="{{ degree.date | date_to_xmlschema }}" style="display:block;">{% if degree.GPA %}GPA: {{ degree.GPA }}{% endif %}Graduated: {{ degree.date | date: "%B %Y" }}</time>
<br />
{% endfor %}

## Projects

{% assign projects=site.data.resume.projects | sort: "start_date" %}
{% for project in projects reversed %}

{:style="margin:0 0 16px"}
### {{ project.name }}

<time datetime="{{ project.start_date | date_to_xmlschema }}" style="display:block;">
  {{ project.start_date | date: '%B %Y' }} &mdash; {% if project.end_date %}{{ project.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>  
{{ project.desc }}.  
<span class="pre-post">Technologies:</span> {{ project.technologies | join: ', ' }}<br />
<br />
{% endfor %}
