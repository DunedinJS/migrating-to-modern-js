_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 06-unit-tests

* Configure Jest

* Add unit tests for application logic

  For example see [source/app/Model.spec.js](./source/app/Model.spec.js)

## To run

1. Clone this repository to your workstation
1. Checkout the `06-unit-tests` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the application into the `dist` directoy.

1. Run `npm run build`
1. Open the `dist/index.html` file directly in a web browser

#### Run tests once

Run `npm test`

#### Run tests in watch mode

Run `npm test -- --watch`

## Jest

[Jest](https://facebook.github.io/jest/) is a JavaScript testing framework which
is fast, easy to setup, and has powerful features.

Jest has a "watch" mode which analyses module dependencies and is smart enough
to determine which tests need to re-tested when source files are changed.
A lot of time can be saved by only re-testing the relevant tests.

Most JavaScript testing frameworks follow very similar conventions so it is easy
to also understand [Jasmine](https://jasmine.github.io/) and [Mocha](https://mochajs.org/)
test specs.

## Jest with Babel

Source files need to be processed by Babel before Jest can test them.
The `babel-jest` package is added to enable this.
