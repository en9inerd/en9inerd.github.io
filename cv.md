---
title: Curriculum Vitae
layout: page
permalink: /cv/
redirect_from: /resume/
seo:
  type: person
---

{: .cv-btn}
[Download as .pdf]({{ '/assets/files/Curriculum_Vitae_VL.pdf' | relative_url }}){: .btn}

## Summary

{% for punct in site.data.cv.summary %}
- {{ punct }}{% endfor %}

{:style="margin-top:1.8em;"}
## Skills Summary

| Category     | Skills               |
|-------------:|:---------------------|
{% for skill in site.data.cv.skills %}| **{{ skill.type }}** | {% for tool in skill.tools %}{{ tool }}{% unless forloop.last %}, {% endunless %}{% endfor %} |  
{% endfor %}

{:style="margin-top:1.8em;"}
## Experience

{% assign positions=site.data.cv.positions | sort: "start_date" %}
{% for position in positions reversed %}

{% unless position.employer == previous_employer %}
### {{ position.employer }} · {{position.location}}
{% endunless %}

{: .remove-bottom-margin}
#### {{ position.title }}

<time datetime="{{ position.start_date | date_to_xmlschema }}" class="smaller">{{ position.start_date | date: '%B %Y' }}{% if position.start_date != position.end_date %} &mdash; {% if position.end_date %}{{ position.end_date | date: '%B %Y' }}{% else %}Present{% endif %}{% endif %}</time>
{% for duty in position.duties %}
- {{ duty }}{% endfor %}
{% assign previous_employer=position.employer %}
{:style="margin-top:1.8em;"}
{% endfor %}

## Personal Projects

{% assign projects=site.data.cv.projects | sort: "start_date" %}
{% for project in projects reversed %}

### {{ project.name }}{% if project.link %} · [{{ project.link.text }}]({{ project.link.url }}){% endif %}

{: .remove-bottom-margin}
#### Used: {{ project.technologies | join: ', ' }}

<time datetime="{{ project.start_date | date_to_xmlschema }}" class="smaller">{{ project.start_date | date: '%B %Y' }}{% if project.start_date != project.end_date %} &mdash; {% if project.end_date %}{{ project.end_date | date: '%B %Y' }}{% else %}Present{% endif %}{% endif %}</time>
{{ project.desc }}

{:style="margin-top:1.8em;"}
{% endfor %}

## Education

{% assign degrees=site.data.cv.degrees | sort: "date" %}
{% for degree in degrees reversed %}

### {{ degree.school }}

{: .remove-bottom-margin}
#### {{ degree.degree }}
<time datetime="{{ degree.date | date_to_xmlschema }}" class="smaller">{{ degree.date | date: "%B %Y" }}</time>

{:style="margin-top:1.8em;"}
{% endfor %}
