# Migrating to modern JS

A simple stopwatch application which serves as an example of how to migrate an old JavaScript application to modern syntax, features, and technologies.

### Each stage is stored in a different branch

#### [`00-original`](https://github.com/DunedinJS/migrating-to-modern-js/tree/00-original)

Our starting application. Built on Backbone.js and state of the art from late 2010 to around 2013.

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

* Add ESLint with Airbnb styleguide rules
* Convert source code to modern syntax

#### [`08-syntax`](https://github.com/DunedinJS/migrating-to-modern-js/tree/08-syntax)

* Convert Backbone's custom class extension to ES6 classes

#### [`09-react`](https://github.com/DunedinJS/migrating-to-modern-js/tree/09-react)

* Convert child views from Backbone Views to React Components

#### [`10-react`](https://github.com/DunedinJS/migrating-to-modern-js/tree/10-react)

* Convert main view from a Backbone View to a React Component

#### [`11-react`](https://github.com/DunedinJS/migrating-to-modern-js/tree/11-react)

* Convert state management from Backbone Model to React state
* Revise tests to cover new logic implementation
