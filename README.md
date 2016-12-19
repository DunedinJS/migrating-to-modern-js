_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 03-modules

* Separate all source code into ES6 modules

  The single `app.js` is now split into multiple files within the [`source`](./source/) directory.
  These use ES6 module import and export.

## To run

1. Clone this repository to your workstation
1. Checkout the `03-modules` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the JavaScript source files into `dist/bundle.js`

1. Run `npm run build`
1. Open the `index.html` file directly in a web browser

## Template files as modules

_For example see [`source/controls/template.html`](./source/controls/template.html)
and [`source/controls/View.js`](./source/controls/View.js)._

Webpack allows non-JavaScript files to be loaded as modules.
This is very convenient because it allows us to separate templates into their
own files and load them into the view modules where needed.

[`raw-loader`](https://github.com/webpack/raw-loader) is used to load the
contents of text files as strings in JavaScript.
This is done at compile-time so the templates are included as strings in the
application bundle and do not have to be requested separately.
