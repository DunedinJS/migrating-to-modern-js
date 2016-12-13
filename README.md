_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 02-modules

* Add Webpack and Babel to compile and bundle modular source code into a
single browser-ready script

  Only a single `<script>` tag to load the application bundle is in
  [`index.html`](./index.html) now.

* Import third-party libraries as modules

  The application no longer relies on global variables because Webpack makes
  sure that all module dependencies are satisfied.

## To run

1. Clone this repository to your workstation
1. Checkout the `02-modules` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the JavaScript source files into `dist/bundle.js`

1. Run `npm run build`
1. Open the `index.html` file directly in a web browser

## Webpack

[Webpack](https://webpack.github.io/docs/) is a module bundler for web projects.
It can bundle multiple source files of different types including JavaScript, HTML,
images, and CSS among others and bundle them into browser-ready files.

Webpack is highly configurable via vast ecosystem of loaders and plugins.

## Babel

[Babel](https://babeljs.io/) is a JavaScript compiler which is most often used to
transpile modern or future JavaScript syntax into older versions.
For example from ES6/ES2015 source code into ES5 code which has full browser support.

_In this branch we only use Babel to transpile ES6 module import syntax.
For an example of this see [`app.js`](./app.js)._
