_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js)_

# 00-original

Simple application built on [Backbone.js](http://backbonejs.org/).

[`app.js`](./app.js) contains all JavaScript for the application except
for third-party libraries.

* No package management &mdash; third-party libraries checked in to the
  repository in the [`vendor`](./vendor/) directory.

* No module system &mdash; all application code in [`app.js`](./app.js)

* No source code compilation &mdash; developer writes code directly for the browser

* No tests &mdash; in fact very difficult to test

[`index.html`](./index.html) is an integral part of the application source code
because it explicitly defines how all JavaScript files are loaded.

* Each JavaScript file (including third-party libraries) is loaded with a
separate HTML `<script>` tag

  This means that the application depends on the third-party libraries to expose themselves
  in the global scope.
  These can be troublesome because the order in which libraries are loaded is important.
  For example, Backbone.js depends on Underscore.js being loaded first.

* Application templates stored in HTML `<script type="text/template">` tags

  These are not visible to users but provide a convenient place for the application
  to load templates from without having to request them from the server.

## To run

1. Clone this repository to your workstation
1. Checkout the `00-original` branch
1. Open the `index.html` file directly in a web browser

## Backbone.js

A lightweight library which helps to structure JavaScript applications with a type of
Model-View-Controller pattern.
It can help to clearly separate code for data and logic from user interface related code.

Backbone.js relies on two other third-party libraries --
[Underscore.js](http://underscorejs.org/), and [jQuery](https://jquery.com/).

Apps built this way were state of the art from late 2010 to around 2013.
Backbone.js is still in wide use today but mainly for long-running projects, not new projects.
