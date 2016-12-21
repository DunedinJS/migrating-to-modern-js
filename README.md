_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 08-syntax

## To run

1. Clone this repository to your workstation
1. Checkout the `08-syntax` branch
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

## To lint

`npm run lint`
