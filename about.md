---
layout: page
title: About
permalink: /about/
seo:
  type: person
---

> ### You can see my [resume]({{ site.baseurl }}{% link resume.md %}) and send me email or a DM on LinkedIn or use [contact form]({{ page.url }}#contact).

{:style="text-align: center;"}
{% avatar {{ site.github.owner_name }} size=200 %}

My name is Vladimir, I'm a software developer whose most interests are related to software development and automating data processing (ETL tools) using JavaScript/TypeScript, Node.js, Python, AWS services, and more.

In my spare time, I help my wife with photography website based on Jekyll and which is hosted on Github and sometimes I implement some scripts/tools based on Telegram API and other things just for fun. Also, I enjoy hiking and playing video games (I like colony simulators like RimWorld or Space Haven).

## Contact Me
<form id="contact" class="gform contact-form" action="https://script.google.com/macros/s/AKfycbyGpb8FslwEaO4_6by0ZmEI1_-Gr6lD9qXfQby9ZHN4EQgB1Vs/exec" method="POST">
  <div class="form-elements">
    <input id="itsatrap" type="text" name="itsatrap" value="" />
    <input id="name" type="text" name="name" placeholder="Name" maxlength="50" required>
    <input id="email" type="email" name="email" placeholder="Email" maxlength="254" required>
    <textarea id="body" name="body" placeholder="Message" maxlength="400" required></textarea>
    <input id="submit" class="btn cf" type="submit" value="Send">
  </div>
  <div class="thankyou_message" style="display:none;">
    <h2><em>Thanks</em> for contacting me!
      I will get back to you soon!</h2>
  </div>
</form>
<script data-cfasync="false" type="text/javascript" src="{{ '/assets/vendor/form-submission-handler.js' | relative_url  }}"></script>
