+++
title = "Amazing Node-RED"
date = 2024-01-21T17:39:00-05:00
aliases = ["2024/01/21/amazing-node-red"]

[taxonomies]
tags = ["automation", "nodejs", "node-red", "iot", "raspberry pi"]
+++

Oh, if only I had touched [Node-RED] earlier. With this awesome programming tool, you can automate everything... well, almost everything. Yes, it is not for everyone, an ordinary user who does not understand the basics of networks and does not know JavaScript will probably prefer [IFTTT] or [Zapier].

How much I have been messing with IFTTT over the past few years, with their constant introduction of new limits, offering a subscription, and other crap. As soon as I raised a docker container with Node-RED on my raspberry pi 4 and I've got so many possibilities and had so much flexibility that I can never see on IFTTT or Zapier. Especially with a dedicated IP address, the possibilities in terms of IoT automation in conjunction with various APIs and online services are almost limitless.
<!--more-->

For example, all information about visitors to my website now goes directly through the Node-RED flow to a private telegram channel (Yeah, sorry for that :smile:). Previously, I did this through Cloudflare Worker, which determined geolocation and some other things in detail and then sent the data to the telegram channel via IFTTT webhook. But IFTTT made webhooks as a premium feature and it turned out that the fetch implementation in Cloudflare Worker does not work with non-standard ports, for example, I cannot use `https://<hostname>:8443/api` as a url, it cuts off port 8443. Generally speaking, I sent both services to hell, installed and configured a couple of Node-RED nodes (for geolocation determination - [node-red-contrib-ip-location-lite] and for creating simple telegram bots - [node-red-contrib-telegrambot]), implemented a couple of JS functions and other small things, connected it all into a flow. And voila, everything works.

I also created a simple flow for auto-posting from the blog to the telegram channel - every 15 minutes, the [feed parser] determines if there are new posts in feed.xml in the atom format and if there are, it processes and posts them in the telegram channel.

In general, it was about time to host everything at home, without all of this cloud crap with a bunch of restrictions.

Above mentioned Node-RED flows that I implemented:
- [Get New Posts From Blog]
- [Visitor Notifier]

[Node-RED]: https://nodered.org/
[IFTTT]: https://ifttt.com/
[Zapier]: https://zapier.com/
[node-red-contrib-ip-location-lite]: https://flows.nodered.org/node/node-red-contrib-ip-location-lite
[node-red-contrib-telegrambot]: https://flows.nodered.org/node/node-red-contrib-telegrambot
[feed parser]: https://flows.nodered.org/node/node-red-node-feedparser
[Get New Posts From Blog]: https://gist.github.com/en9inerd/31d94befc2e235f704010b77d3877766#file-get-new-posts-from-blog-json
[Visitor Notifier]: https://gist.github.com/en9inerd/31d94befc2e235f704010b77d3877766#file-visitor-notifier-json
