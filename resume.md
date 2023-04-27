---
title: Resume
layout: page
permalink: /resume/
redirect_from: /cv/
seo:
  type: person
---

{: .resume-btn}
[Download as .pdf]({{ '/assets/files/Resume_VL.pdf' | relative_url }}){: .btn}

## Summary

{% for punct in site.data.resume.summary %}
- {{ punct }}.{% endfor %}

{:style="margin-top:1.8em;"}
## Skills Summary

| Skill        | Tool (if applicable) |
|:-------------|:---------------------|
{% for skill in site.data.resume.skills %}| {{ skill.type }} | {% for tool in skill.tools %}{{ tool }}{% unless forloop.last %}, {% endunless %}{% endfor %} |  
{% endfor %}

{:style="margin-top:1.8em;"}
## Experience

{% assign positions=site.data.resume.positions | sort: "start_date" %}
{% for position in positions reversed %}

{% unless position.employer == previous_employer %}

### {{ position.employer }} ({{position.location}})

{% endunless %}

{:style="margin-bottom: 0;"}
#### {{ position.title }}

<time datetime="{{ position.start_date | date_to_xmlschema }}" style="font-size:14px;">
  {{ position.start_date | date: '%B %Y' }} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>
{% for duty in position.duties %}
- {{ duty }}{% endfor %}
{% assign previous_employer=position.employer %}
{:style="margin-top:1.8em;"}
{% endfor %}

## Education

{% assign degrees=site.data.resume.degrees | sort: "date" %}
{% for degree in degrees reversed %}

### {{ degree.school }}

{:style="margin-bottom: 0;"}
{{ degree.degree }}
<time datetime="{{ degree.date | date_to_xmlschema }}">{% if degree.GPA %}GPA: {{ degree.GPA }}<span style="display: inline-block; width: 2.5em;"></span>{% endif %}Graduated: {{ degree.date | date: "%B %Y" }}</time>

{:style="margin-top:1.8em;"}
{% endfor %}

## Projects

{% assign projects=site.data.resume.projects | sort: "start_date" %}
{% for project in projects reversed %}

### {{ project.name }}
{: .remove-bottom-margin}

<time datetime="{{ project.start_date | date_to_xmlschema }}">
  {{ project.start_date | date: '%B %Y' }} &mdash; {% if project.end_date %}{{ project.end_date | date: '%B %Y' }}{% else %}Present{% endif %}
</time>
{{ project.desc }}.  
Technologies: {{ project.technologies | join: ', ' }}

{:style="margin-top:1.8em;"}
{% endfor %}
