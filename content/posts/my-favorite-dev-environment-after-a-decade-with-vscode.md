+++
title = "My Favorite Dev Environment After a Decade with VSCode"
date = 2025-06-20T22:59:00

[taxonomies]
tags = ["neovim", "tmux", "terminal", "productivity"]
+++

# My Favorite Dev Environment After a Decade with VSCode

For a long time, I considered my development environment on VSCode to be quite convenient and productive. I configured LSP servers, mastered many shortcuts, and tried to use a minimal number of plugins — instead relying heavily on native tasks. It seemed like it couldn’t get any better — my productivity was at its peak.

But earlier this year, I became more interested in how other developers set up their development environments, for example, [ThePrimeagen]. After that, doubts started to creep in: maybe I was far from true productivity...

I had been using VSCode for 10 years, but at the end of January this year, I decided to try switching to [NeoVim] — to change my habits and fully tie my development environment to the terminal. This radically changed my perspective and understanding of how a development environment should be set up and how flexible it can be.

## Terminal

I had always been fine with the default macOS terminal with a custom color scheme. Probably because it never occurred to me that a terminal can be more than just a terminal — it can be a key component of a development environment. After I tried NeoVim and Vim for the first time, which looked quite ugly without true color support, I had to try several terminals. I didn’t consider terminals built with higher-level programming languages that tend to be memory-hungry like [Kitty]. Also, the terminal had to support undercurl. So, I narrowed it down to three main candidates: [WezTerm], [Alacritty], and [Ghostty]. All of them are GPU-accelerated as expected — I didn’t dig too deep into that, but it’s trendy nowadays.

### WezTerm

WezTerm is great in many ways and literally has everything you could want:

- Written in Rust, so performance is hardly an issue.
- Supports Lua, which has led to a bunch of plugins for every taste, and you can even write your own if needed.
- Acts as a terminal multiplexer, removing the need to use tmux.
- Can manage sessions through plugins, again making tmux unnecessary.

In general, it’s hard to say what WezTerm doesn’t have. So why didn’t it suit me?
It turns out WezTerm is very versatile but also heavy (even in terms of binary size), and I really dislike things that try to be too universal. The problem with chasing too many directions is the inevitable decline in quality over time. Also, I hate being overwhelmed by features I mostly won’t use.
Speaking of quality — in some cases, with many tabs and splits, WezTerm’s memory usage can be quite high compared to Ghostty, which didn’t make me happy.

### Alacritty

Another terminal emulator written in Rust. Here, everything is basically the opposite of WezTerm. Alacritty shines with its minimalism — it has absolutely nothing extra, but its performance and memory usage are excellent. However, it lacks any kind of multiplexer, window manager, ligature support (though maybe they’ve added it by now), and it’s more focused on Windows despite being cross-platform, which caused me quite a few issues with how key bindings work on macOS.

### Ghostty

Probably the most ideal candidate for me among all the options, and the one I still use today. Ghostty is quite minimalist in every aspect, incredibly easy to configure, and its default font is JetBrains Mono. Being implemented in Zig makes it fast and efficient in terms of memory usage. Tabs and splits are also supported. The only thing missing to fully replace tmux is session management — but that’s apparently under discussion on GitHub and depends on how many people vote for it. However, this is not a major downside for me, since in any case, nothing really compares to tmux when it comes to session and window management.

## Window and Session Manager

In this regard, the choice isn’t very large — either the deprecated [Screen], the new trendy [Zellij], or the most widespread and long-established [tmux]. I prefer the extensive customization and lightweight nature of tmux, plus Zellij uses YAML for configs, which I really dislike. I usually enable undercurl for tmux following [this guide]. I also really like using tmux together with a [fuzzy finder]; I first saw this with ThePrimeagen and now I use his [tmux-sessionizer] — a very handy tool for switching between sessions/projects.

## Editor

The text editor is one of the key components of a terminal-based development environment. I spent about a week learning and getting used to regular Vim, but then I switched to NeoVim — all thanks to ThePrimeagen. Overall, my transition from VSCode to NeoVim took me roughly four unhurried months, after which I stopped using VSCode for work entirely.

To start, I completed the official Tutorial (using the `:Tutorial` command) and configured NeoVim with the help of [Kickstart.nvim] by [TJ DeVries]. To some extent, practicing motions was made easier for me thanks to [vim-be-good]. And of course, the best way to figure things out in NeoVim is by using the official documentation via the `:help` command. I also really like a fantastic [cheat sheet for NeoVim].

The main trap for beginners switching to NeoVim from VSCode is the temptation to install dozens of plugins and turn it into a VSCode clone. I’ve seen countless blogs and YouTube videos where people load up NeoVim with dozens of plugins trying to recreate VSCode — I strongly advise against doing this, unless we’re talking about just using a VSCode color scheme. Otherwise, you’ll end up disappointed, because NeoVim has a completely different development workflow that has nothing to do with VSCode. A large collection of impractical plugins can easily become a major problem both in terms of performance and compatibility. NeoVim/Vim follows a completely different philosophy built around motions, a mouseless strategy, and practicality — installing only the necessary plugins and fine-tuning them for your needs.

If you want NeoVim to look and behave like VSCode, or if you’re blindly copying someone else’s NeoVim configuration, then you probably shouldn’t switch to it. The transition and habit-building process takes quite a bit of time, and not everyone can afford or is willing to spend days or weeks tinkering with their development environment to tailor it to themselves. Without the desire to radically change your development workflow, the whole experience can turn into a struggle.

## Conclusion

Switching from VSCode to a terminal-based setup with Ghostty, NeoVim, and tmux has completely reshaped how I work and boosted my productivity in ways I hadn’t expected. While the transition requires patience and a willingness to learn new workflows, the payoff is a more flexible, efficient, and personalized development environment.

My current setup is essentially Ghostty + NeoVim + tmux, and I don’t expect that to change anytime soon. If you’re interested, you can check out my configs for these tools in my [dotfiles repository].

[ThePrimeagen]: https://github.com/ThePrimeagen
[NeoVim]: https://neovim.io/
[Kitty]: https://sw.kovidgoyal.net/kitty/
[WezTerm]: https://wezterm.org/index.html
[Alacritty]: https://alacritty.org/
[Ghostty]: https://ghostty.org/
[Screen]: https://www.gnu.org/software/screen/
[Zellij]: https://zellij.dev/
[tmux]: https://github.com/tmux/tmux
[this guide]: https://dev.to/anurag_pramanik/how-to-enable-undercurl-in-neovim-terminal-and-tmux-setup-guide-2ld7
[fuzzy finder]: https://github.com/junegunn/fzf
[tmux-sessionizer]: https://github.com/ThePrimeagen/tmux-sessionizer
[Kickstart.nvim]: https://github.com/nvim-lua/kickstart.nvim
[TJ DeVries]: https://github.com/tjdevries
[vim-be-good]: https://github.com/ThePrimeagen/vim-be-good
[cheat sheet for NeoVim]: ./cheat-sheet.png
[dotfiles repository]: https://github.com/en9inerd/dotfiles
