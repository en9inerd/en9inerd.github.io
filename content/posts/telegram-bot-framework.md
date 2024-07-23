+++
title = "TeleBuilder - Telegram bot framework"
date = 2023-05-29T22:22:00-04:00

[taxonomies]
tags = ["telegram api", "nodejs", "typescript", "bot"]
+++
  
[[ NPM Package ]](https://www.npmjs.com/package/telebuilder)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[ GitHub Repo ]](https://github.com/en9inerd/telebuilder)

In my spare time, I find joy in tinkering with small open source projects, one of which is a straightforward Telegram bot framework called TeleBuilder. This framework is powered by the [GramJS library](https://www.npmjs.com/package/telegram) and is written in TypeScript. I've primarily developed it for personal use to implement various bots tailored to my specific needs. However, TeleBuilder also serves as a testing ground for experimenting with new TypeScript features and approaches.
<!--more-->

TeleBuilder operates as a command message-centric framework, acting as an additional abstraction layer built on top of GramJS. To effectively utilize TeleBuilder, it's essential to have a basic understanding of how GramJS functions. But the beauty of TeleBuilder lies in its ability to simplify several aspects of Telegram bot development. Here are some of the features that make it stand out:

- **Bot Command Descriptions**: With TeleBuilder, you can describe bot commands by specifying their visibility, which can be controlled using [bot command scopes](https://core.telegram.org/bots/api#botcommandscope) and language settings.
- **Event/Update Handlers and Command Parameters**: The framework facilitates the creation of event/update handlers, as well as command parameter validation.
- **Automatic Bot Command Scope Management**: TeleBuilder automates the process of resetting previous bot command scopes and setting new ones whenever changes are made. This feature eliminates the need for manual management.
- **Button Menu Simplification**: TeleBuilder streamlines the process of building button menus by associating buttons with class methods that function as update or event handlers.

It's worth noting that TeleBuilder is still under active development, and I wouldn't categorize it as a production-ready framework just yet. However, it's already functional and useful for specific use cases. Unfortunately, I must admit that it remains undocumented at this stage. Rest assured, I'm committed to addressing this by incorporating TypeDoc to provide comprehensive documentation for TeleBuilder in the near future. So, stay tuned for updates and improvements!
