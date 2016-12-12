# Migrating to modern JS

A simple stopwatch application which serves as an example of how to migrate an old JavaScript application to modern syntax, features, and technologies.

### Each stage is stored in a different branch

#### [`00-original`](https://github.com/DunedinJS/migrating-to-modern-js/tree/00-original)

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

#### [`01-packages`](https://github.com/DunedinJS/migrating-to-modern-js/tree/01-packages)

* Add NPM for package management
* Remove third-party libraries from repository

#### [`02-modules`](https://github.com/DunedinJS/migrating-to-modern-js/tree/02-modules)

* Add Webpack and Babel to compile and bundle modular source code into a single browser-ready script
* Import third-party libraries as modules

#### [`03-modules`](https://github.com/DunedinJS/migrating-to-modern-js/tree/03-modules)

* Separate all source code into ES6 modules

#### [`04-sourcemaps`](https://github.com/DunedinJS/migrating-to-modern-js/tree/04-sourcemaps)

* Configure sourcemaps

#### [`05-versioning`](https://github.com/DunedinJS/migrating-to-modern-js/tree/05-versioning)

* Configure Webpack to output bundle with a version hash suffix in its filename
* Configure Webpack to inject script tag into HTML file

#### [`06-unit-tests`](https://github.com/DunedinJS/migrating-to-modern-js/tree/06-unit-tests)

* Configure Jest to test application logic

#### [`07-syntax`](https://github.com/DunedinJS/migrating-to-modern-js/tree/07-syntax)

* Convert source code to modern syntax

#### `08-react` coming soon
