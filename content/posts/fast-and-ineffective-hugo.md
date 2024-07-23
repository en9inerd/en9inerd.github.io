+++
title = "Fast and Ineffective Hugo"
date = 2024-03-24T14:12:00-04:00
aliases = ["2024/03/24/fast-and-ineffective-hugo"]

[taxonomies]
tags = ["jekyll", "hugo", "ssg"]
+++

I've been using [Jekyll] for quite a while now, probably around 7-8 years. I'm not exactly a very active blogger, and I don't have any complaints about Jekyll in terms of generating documentation - usually there is no more than 100 pages. Yes, sometimes it can be quite slow, especially with complex [Liquid] constructions or if there are a lot of images, or if you're using the [Kramdown] parser instead of [CommonMark]. However, Jekyll's slowness is typically not critical, as sites are not built frequently, and one or two minutes don't really make a difference.

Recently, out of curiosity, I explored the range of popular static site generators (SSGs) - who knows, maybe there's something out there that's as stable and mature as Jekyll but with better performance. [Hugo], [Astro], and [11ty] caught my attention. Since I'm not a fan of products that go down the path of excessive universality, like a Swiss Army knife with everything you need but with lots of drawbacks, Astro and 11ty were ruled out. That left "incredibly fast" Hugo, which I decided to try out and see if it lives up to its reputation as described in various articles. Hugo does indeed boast impressive performance thanks to its implementation in Go, and according to some, it has an "insanely awesome" templating engine based on the [Go html/template package].
<!--more-->

Having chosen a potential candidate to replace Jekyll, I set myself a fairly simple task - just migrate a not-so-complex [Hacker theme] from Jekyll to Hugo while trying to adhere to best practices. What seemed like a straightforward theme migration turned out to be a rather poor experience with Hugo, and here's what is wrong with Hugo:

- **Documentation**. The docs are an important part of the product. If you notice that the docs are bad, the product is bad. You can have a well-documented bad product and it'll be better in a lot of cases than a quality product with no docs. As it stands, Hugo's documentation is a mess, it's very poor - structured like a reference and looks incomprehensible. And judging by what other people are saying on [hackernews], I'm not alone in finding it quite awful. Especially for newcomers to SSGs, it's a nightmare. Considering that many complaints about the documentation date back to 2018, the situation is unlikely to change anytime soon.
- **Critical changes**. They sort of exist informally, but formally they are absent - the major version is still zero to this day, Semantic Versioning conventions are not followed. Judging by people's [hackernews], implicit critical updates are now being released less frequently; previously, this phenomenon was more common, and many wondered why changes made without incrementing the major version would break their site every time, in some cases changelogs not mentioning any critical changes at all. The product remains extremely unstable to this day.
- **Templating language**. Only now I understand why there's a love for Hugo among emacs/elisp enthusiasts, usually older generation (no offense intended, just my observation); perhaps these same people decided to make the Go templating language similar to Lisp. Actually, how much the author of Hugo is a fan of the 70s editor is evident from the presence of [undocumented support for Emacs Org Mode] in Hugo (go-org library is part of Hugo). And yes, Hugo templates are based on Go templating language, maybe for someone it's an unimaginable convenience and the standard, but not for me. A Lisp-like templating language in the 21st century is nonsense to me and is not convenient at all, even though I have experience with Lisp.
- **Extensibility**. Hugo doesn't have a lot of plugins (modules) available, and those that exist are usually far from the quality that Jekyll or 11ty communities can offer. For example, I usually use Atom feed, but since Hugo only supports RSS out of the box, and not in the best way, it's suggested to use an [unofficial hugo component] or use [json feed]. Both solutions don't cover some things like `media:thumbnail` or author `uri`. I don't want to write my own Atom feed generator or fix things for others; I want to take and use a ready-made solution, whether out of the box or in the form of a plugin. The same goes for SEO tags.

Overall, I couldn't complete the migration of the Hacker theme from Jekyll to Hugo; all of the above mentioned caused me pain while trying to accomplish such a seemingly simple task. It's just not worth it.

[The incomplete Jekyll theme migration]

While Jekyll remains the standard for me in terms of what an SSG should be, I've never had the need to learn Ruby over all these years to use Jekyll and its associated plugins. Jekyll is a mature and stable product, very easy to use, with brilliant documentation. Yes, it has performance issues, but in many cases, it's not critical.

The only advantage of Hugo is its performance, but only in cases where it's dealing with documentation of 1000 pages or more, or if it's a blog with lots of photos, since Hugo can do simple image processing and thumbnail generation.
My conclusion regarding Hugo: if you don't plan to produce a large volume of content, or if you don't already have a significant archive of posts, it's highly unlikely that the benefits of Hugo's remarkable rendering speed will justify the investment, let alone yield tangible returns.

For those who are still undecided about whether Hugo is the right tool for them, I recommend reading Michael Morehouse's post "[Hugo Probably Isn't For You]" and Sean C Davis post "[Comparing Static Site Generator Build Times]".

[Jekyll]: https://jekyllrb.com/
[Liquid]: https://shopify.github.io/liquid/
[Kramdown]: https://github.com/kramdown/parser-gfm
[CommonMark]: https://github.com/github/jekyll-commonmark-ghpages
[Hugo]: https://gohugo.io/
[Astro]: https://astro.build/
[11ty]: https://www.11ty.dev/
[Go html/template package]: https://pkg.go.dev/html/template
[Hacker theme]: https://github.com/en9inerd/hacker
[unofficial hugo component]: https://github.com/kaushalmodi/hugo-atom-feed
[json feed]: https://discourse.gohugo.io/t/both-rss-and-atom-feeds/17384/3
[Hugo Probably Isn't For You]: https://yawpitchroll.com/posts/hugo-probably-is-not-for-you/
[Comparing Static Site Generator Build Times]: https://css-tricks.com/comparing-static-site-generator-build-times/
[undocumented support for Emacs Org Mode]: https://lucidmanager.org/productivity/create-websites-with-org-mode-and-hugo/
[The incomplete Jekyll theme migration]: https://github.com/en9inerd/hugo-hacker-theme
[hackernews]: https://news.ycombinator.com/item?id=30527884
