# Migrating to modern JS

A simple stopwatch application which serves as an example of how to migrate an old JavaScript application to modern syntax, features, and technologies.

### Each stage is stored in a different branch

#### `00-original`

Simple application built on [Backbone.js](http://backbonejs.org/), [Underscore.js](http://underscorejs.org/), and [jQuery](https://jquery.com/).

* No package management -- third-party libraries checked in to repository
* No tests
* No module system
* No source code compilation
* Each JavaScript file (including third-party libraries) loaded with a separate HTML `<script>` tag
* Application source stored in a single file
* Application templates stored in HTML `<script type="text/template">` tags

Backbone.js is a lightweight library which helps to structure JavaScript applications
with a type of Model-View-Controller pattern.
It can help to clearly separate code for data and logic from user interface related code.

Apps built this way were state of the art from late 2010 to around 2013.
Backbone.js is still in wide use today but mainly for long-running projects, not new projects.

#### `01-packages`

* Adds NPM for package management

_Other branches coming soon_

#### `02-modules`

* Adds Webpack and Babel to compile and bundle modular source code into browser-ready script
* Separates source code into ES6 modules
