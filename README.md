# FRC 167 Documentation
![](https://github.com/dominicrutk/docs/workflows/gh-pages/badge.svg?branch=master)

This repository serves as documentation for Iowa City Robotics \(FRC Team 167\).
Although these docs are publicly available for other teams to use, they are primarily intended for internal use.
As such, some common practices might apply mostly to FRC Team 167.

The compiled book is available [here](https://dominicrutk.github.io/docs/).
Alternatively, the Markdown source files are available [here](./src/SUMMARY.md).

There are three important branches on this repo:
- The `devel` branch is the primary branch for writing and editing the book. It is the default branch.
- The `master` branch is for production-ready versions of the book. It is merged from `devel` when changes are ready to go live.
- The `gh-pages` branch is the compiled book. It automatically updates whenever the `master` branch updates. You should never manually commit onto this branch.
In essence, this project uses the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) branching model without bug fix branches.
Feature branches are recommended but not required.

To contribute to this project, simply make sure your changes compile and submit a PR explaining your changes.
