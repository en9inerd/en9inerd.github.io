+++
title = "Zig Devevelopment Environment Setup on macOS/Linux"
date = 2024-10-16T15:20:00-04:00

[taxonomies]
tags = ["zig", "vscode", "macos", "linux"]
+++

[Zig] is a relatively new programming language that's often described as a better version of C. It's fast, simple, and focuses on performance and safety, which made me curious to try it out. If you're interested in Zig and thinking about setting it up in VSCode on macOS/Linux, here’s what I went through while setting up my development environment.
<!--more-->

## Zig and ZLS Installation

In the past, users were often advised to target the `master` branch due to frequent breaking changes in both the language and build system. Many beginner resources also assumed users were working with the latest version. While targeting `master` is still an option, especially if you're contributing to Zig or need cutting-edge features, it can introduce breaking changes that require manual fixes.
For most users, it's now recommended to target **stable, tagged releases** for a more reliable and consistent experience. Zig’s official website provides [pre-built releases] for all supported platforms.

For the Zig Language Server (ZLS), which provides advanced editor support, you can find pre-built binaries for specific Zig versions on [this page]. Be aware that ZLS may not function correctly with incompatible Zig versions, so always ensure you're using the ZLS version recommended for your chosen Zig version.

I’ve automated the process of downloading and installing both Zig and ZLS using this [bash script]. By default, the script installs the latest pre-built version of Zig and ZLS. You can change the Zig version by editing the `LATEST_ZIG_VERSION` variable, and the script will automatically fetch the correct ZLS version. You can also specify a target installation directory, or it will be current working directory by default.

Once installed, don’t forget to add Zig and ZLS to your `PATH` by editing your shell profile, such as `~/.zshrc` or `~/.bashrc`.

## VSCode Configuration


To work with Zig in VSCode, you'll need to install the [Zig Language extension]. This extension provides syntax highlighting, code completion, and integrates with ZLS for features like go-to-definition, find-references, and hover information.
Once the extension is installed, you’ll need to configure the paths to Zig and ZLS within the extension’s settings:

```json
{
  "zig.path": "zig",
  "zig.zls.path": "zls",
}
```

This configuration tells VSCode where to find your installed Zig and ZLS binaries.

## Zig package initialization

To create a new Zig project, use the zig init command. This initializes a new package with the necessary files and directory structure. After initialization, you can build your package:

```bash
mkdir my_project && cd my_project
zig init
zig build
```

### Managing Dependencies

Zig’s package management system is still evolving, and it currently handles external dependencies in a simpler way compared to more mature ecosystems like Rust's `cargo` or JavaScript's `npm`. To add a dependency, use the `zig fetch --save <url>` command, where `<url>` is the tarball link for the dependency. For example:

```bash
zig fetch --save https://github.com/kubkon/zig-yaml/archive/a551d00ab041f4799420ab224cdc3efdf978092c.tar.gz
```

This command adds a record of the dependency in your `build.zig.zon` file. You can download all dependencies with the `zig build --fetch` command. By default, fetched dependencies are stored in the `~/.cache/zig/` directory.

### Linking Dependencies in `build.zig`

After fetching the dependencies, you need to modify the `build.zig` file to link them into your project. For example, if you’re using the `zig-yaml` package, you can add the following lines for the `exe` function:

```zig
const yaml_dep = b.dependency("zig-yaml", .{ .target = target, .optimize = optimize });
exe.root_module.addImport("yaml", yaml_dep.module("yaml"));
```

Now you can import and use the `yaml` package in your project like this:

```zig
const yaml = @import("yaml");
```

### Evolving Package Management

Keep in mind that Zig’s package management system is still under development, and changes are expected as it evolves. The current approach works, but it’s not as seamless as some more mature ecosystems. You may need to manage dependencies manually at times, but it’s improving rapidly.

## Conclusion

That’s it! Zig is still a relatively new language, and since it hasn’t reached version 1.0 yet, you can expect some breaking changes in the future. However, it’s already quite stable and shows a lot of potential, especially for systems programming. If you're interested in low-level programming and want to explore something new, Zig is definitely worth a try.

As for me, I’m excited to dive deeper into Zig and experiment with its features, though I’m not quite ready to use it in production yet. I’ll be keeping an eye on Zig’s development to see how it evolves. For now, I’m just enjoying the learning process and exploring what the language can do.

One thing I recommend trying out right away is [Zig’s cross-compilation feature for C/C++ code]. It’s a great way to leverage existing C/C++ libraries and tools, whether you’re using Zig directly or not. This part of Zig’s toolchain is already powerful and can be a real asset for working across platforms.

[Zig]: https://ziglang.org/
[pre-built releases]: https://ziglang.org/download/index.json
[this page]: https://zigtools.org/zls/install/
[bash script]: https://github.com/en9inerd/dotfiles-setup/blob/master/install-zig.sh
[Zig Language extension]: https://marketplace.visualstudio.com/items?itemName=ziglang.vscode-zig
[Zig’s cross-compilation feature for C/C++ code]: https://zig.news/kristoff/cross-compile-a-c-c-project-with-zig-3599
