_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 04-sourcemaps

* Configure sourcemaps in the Webpack configuration

## To run

1. Clone this repository to your workstation
1. Checkout the `04-sourcemaps` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the JavaScript source files into `dist/bundle.js`

1. Run `npm run build`
1. Open the `index.html` file directly in a web browser

## Sourcemaps

Sourcemaps allow web browser debugging tools to relate executed code back to
original source code.
This is important because the code which is executed by a web browser may be
compiled/transpiled, bundled, and minified &mdash; making it much less readable.
By using sourcemaps it is possible to step step through or set breakpoints in
the source files which are much easier to understand.

Sourcemaps can also be used for CSS which may be authored with a pre-processor
such as Sass.

Webpack has built-in support for sourcemap generation with the `devtool` option.
