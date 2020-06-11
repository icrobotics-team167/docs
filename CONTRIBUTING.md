# Contributing

Welcome to the FRC 167 Documentation! We welcome any relevant contributions to the book.

## Project Structure

This project uses an open-source Rust utility called [mdBook](https://github.com/rust-lang/mdBook) to compile Markdown files into an HTML book. To work on the project, you must first install Rust. Instructions for that are available [here](https://www.rust-lang.org/tools/install). Then, run the following shell command to install mdBook:

```bash
cargo install mdbook
```

Documentation for mdBook is available [here](https://rust-lang.github.io/mdBook/) \(incidentally, the mdBook documentation is an mdBook itself\). The most important ideas from the mdBook documentation are:

- Book metadata resides in `book.toml`
- All Markdown and media files belong in the `src` directory
- The layout of the book \(chapters, sections, etc.\) is described in `src/SUMMARY.md`
- Use the shell command `mdbook build` to compile the book (or use `mdbook watch` to automatically compile after file changes)
- The HTML output of the book is generated in the `book` directory

## Branches

These docs use something similar to the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. The main difference is that there aren't any pre-release (bug-fix) branches for this project. There are three perpetual branches: `devel`, `master`, and `gh-pages`.
- The `devel` branch is where writing and editing occur. You can commit directly onto this branch, but feature branches are preferred.
- When changes are ready for release, they get merged into the `master` branch from `devel`.
You should never commit onto `master` directly.
- A GitHub workflow automatically compiles the book from the `master` branch and pushes it onto the `gh-pages` branch. The published book on GitHub pages uses the `gh-pages` branch as its source.

## How to Contribute

For minor changes (fixing typos, improving code samples, etc.), simply submit a PR and briefly explain your changes. For major changes (rewriting, adding, or deleting sections/chapters), open an issue and explain your changes before submitting a PR. Do not submit a PR for any changes that do not compile.
