_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 07-syntax

* Add ESLint with Airbnb styleguide rules

  See [`.eslintrc.js`](./.eslintrc.js) which defines code style rules for
  JavaScript files outside the `source` directory.

  See [`source/.eslintrc.js`](./source/.eslintrc.js) which defines code style
  rules for JavaScript files inside the `source` directory.

* Convert source code to modern syntax

## To run

1. Clone this repository to your workstation
1. Checkout the `07-syntax` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the application into the `dist` directoy.

1. Run `npm run build`
1. Open the `dist/index.html` file directly in a web browser

##### Run tests

* `npm test` to run tests once.

* `npm run test:watch` to run Jest continuously and re-tests when source files change.

* `npm run test:coverage` to run tests once and output code coverage reports to the `coverage` directory and the command line.
An HTML report is generated which can be viewed in a web browser at
`coverage/lcov-report/index.html`.

## Lint

`npm run lint`

## ESLint

[ESLint](http://eslint.org/) is the de-facto standard for JavaScript code linting.
It is highly configurable through an extensive set of build-in rules and can be
extended with plugins.

The `npm run lint` task has been configured and ESLint is also integrated with
the Webpack build task so issues will display in the console.

## Airbnb JavaScript Style Guide

The [Airbnb JaavaScript Style Guide](https://github.com/airbnb/javascript) is
currently the most popular style guide for JavaScript.
The rules help to reduce error-prone code, improve consistency and readability,
and keep up with best practices for modern syntax.
It is worth browsing through the guide.

ESLint has been configured with the `eslint-config-airbnb` package to enforce
the style guide rules.

#### In-editor linting

It is very helpful to have in-editor linting which shows issues as you type code.

[linter-eslint](https://atom.io/packages/linter-eslint) for Atom

[vscode-eslint](https://github.com/Microsoft/vscode-eslint) for VSCode

[SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint) for Sublime Text
