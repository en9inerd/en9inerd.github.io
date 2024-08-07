+++
title = "Overcoming CORS Restrictions with a Cloudflare Workers-Based Proxy"
date = 2023-04-17T22:22:00-04:00
aliases = ["2023/04/17/cors-proxy"]

[taxonomies]
tags = ["cors proxy", "cloudflare workers", "fetch api"]
+++

Cross-Origin Resource Sharing (CORS) restrictions can be a major obstacle for web developers, preventing them from accessing data from different domains using the Fetch API. However, there is a solution that allows you to bypass these restrictions and simplify your development process - a Cloudflare Workers-based proxy.
<!--more-->

A Cloudflare Workers-based proxy intercepts requests and adds the necessary CORS headers to allow the web page to access data from different domains. I wouldn't recommend to use one of popular existing solution provided by [Zibri on GitHub](https://github.com/Zibri/cloudflare-cors-anywhere) - code appears to be functional, but it needs some improvements in terms of good practices, error handling, security, and readability. Despite the disadvantages, it has a couple of good ideas which I borrowed for my implementation. Official Cloudflare worker [CORS header proxy example](https://developers.cloudflare.com/workers/examples/cors-header-proxy/) provides a starting point for setting up your own proxy and adding the necessary headers, but don't try to use this example as is with default fetch options because worker example assigns initial request url origin to the `Access-Control-Allow-Origin` response header which is not a good idea - it will cause mismatch between `Access-Control-Allow-Origin` and `Origin` request headers and browser will reject the response. Instead, you it should assign initial `Origin` request header value to the `Access-Control-Allow-Origin` response header. I created my own implementation of Cloudflare worker based CORS proxy using the official example and some ideas from Zibri's implementation. You can find it on GitHub [here](https://github.com/en9inerd/cors-proxy).

By using a Cloudflare Workers-based proxy, you can work around ad blockers like uBlock Origin and access data from third-party APIs that require CORS headers. Additionally, it eliminates the need for you to set up and maintain your own server infrastructure, making it a simple and effective solution for overcoming CORS restrictions.

In conclusion, a Cloudflare Workers-based proxy is a powerful tool for web developers struggling with CORS restrictions. By intercepting requests and adding the necessary headers, a proxy allows you to easily access data from different domains using the Fetch API. Whether you're working on a personal project or a larger web application, a Cloudflare Workers-based proxy can simplify your development process and make your life easier.
