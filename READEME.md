_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 01-packages

* Add NPM for package management

  The [`package.json`](./package.json) file defines project properties including dependencies

* Remove third-party libraries from repository

  Because NPM now manages dependencies we no longer need to check in files for Backbone.js, Underscore.js, and jQuery.

* Update HTML `<script>` tags to reference third-party libraries from the `node_modules` directory

## To run

1. Clone this repository to your workstation
1. Checkout the `01-packages` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies
1. Open the `index.html` file directly in a web browser

## NPM

[NPM](https://docs.npmjs.com/) is a package repository and also a command-line tool
for managing packages from the repository.
NPM is by far the most popular way to manage dependencies in JavaScript projects.
The NPM command-line tool is included with Node.js.

It is commonly thought that NPM stands for _'Node Package Manager'_ but that's not correct
&mdash; they're officially just three random letters.
