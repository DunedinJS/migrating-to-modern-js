_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 05-versioning

* Configure Webpack to output bundle files with version names

  Files output to the `dist` directory now have hashes appended to their filenames.

* Configure Webpack to inject script tag into HTML file

  `html-webpack-plugin` is used to automatically inject required tags for bundle
  files into the HTML file.
  [`index.html`](./source/index.html) is now in the `source` directory because
  it is a template for the injection plugin.

## To run

1. Clone this repository to your workstation
1. Checkout the `05-versioning` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the application into the `dist` directoy.

1. Run `npm run build`
1. Open the `dist/index.html` file directly in a web browser

## Version hashes and long term caching

By adding version hashes to file names it is possible to cache files for a very
long time.
For example `dist/bundle-f209f82ea3792f8e93df.js`

If the content of the file changes, its version hash differs and therefore the
file name is different.

This is a much more efficient strategy than for example bundling into a versioned
directory such as `dist/v1/bundle.js` or appending version query params to the
URL when requesting a file like `dist/bundle.js?v=1`.

The difficult part is that URL paths for bundled files can no longer be manually
written because they are not predictable .
`html-webpack-plugin` handles this automatically by injecting tags with correct
file names into HTML files.

There are also options to generate manifest files which expose bundled file names
if the HTML is to be generated dynamically on the server-side.
