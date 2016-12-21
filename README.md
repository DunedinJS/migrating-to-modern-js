_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 06-unit-tests

* Add Jest and configure for tests and code coverage

  See new `test`, `test:watch`, and `test:coverage` tasks added in the `scripts`
  section of [`package.json`](./package.json)

* Add unit tests for application logic

  For example see [`source/app/Model.spec.js`](./source/app/Model.spec.js)

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

## To test

* `npm test` to run tests once.

* `npm run test:watch` to run Jest continuously and re-tests when source files change.

* `npm run test:coverage` to run tests once and output code coverage reports to the `coverage` directory and the command line.
An HTML report is generated which can be viewed in a web browser at
`coverage/lcov-report/index.html`.

## Jest

[Jest](https://facebook.github.io/jest/) is a JavaScript testing framework which
is fast, easy to setup, and has powerful features such as code coverage and mocking.
It is simple to setup because it has very sensible defaults which usually means
that little configuration is required.

Jest has a "watch" mode which analyses module dependencies and is smart enough
to determine which tests need to be re-tested when source or test spec files change.
A lot of time can be saved by only re-testing the relevant tests.
By providing such quick feedback it also promotes a
[test-first methodology](http://www.extremeprogramming.org/rules/testfirst.html).

Most JavaScript testing frameworks follow very similar conventions so it is easy
to also understand [Jasmine](https://jasmine.github.io/) and [Mocha](https://mochajs.org/)
test specs.

## Jest with Babel

Files need to be compiled by Babel before Jest can test them.
The `babel-jest` package is added to enable this.

## Jest code coverage

Jest uses the [Istanbul](https://github.com/gotwarlost/istanbul) code coverage
tool internally.
This analyses source code to determine which parts are covered by tests and
outputs coverage reports.
