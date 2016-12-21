# Migrating to modern JS

A simple stopwatch application which serves as an example of how to migrate an old JavaScript application to modern syntax, features, and technologies.

__There is also a TypeScript fork of this project https://github.com/DunedinJS/migrating-to-modern-js-typescript.__

## What do I need?

* Git

* Git Bash &mdash; if using Windows (included with Git)

* Node.js version 6.9

  _Everything probably works with version 4 or higher but has not been checked._
  Run `node -v` to check your current version.
  [Follow the instructions here to install Node.js](https://github.com/DunedinJS/dunedin-modern-javascript/blob/master/topics/common/nodejs-install.md)

* A text editor with first-class JavaScript support.

  [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), and
[Sublime Text](https://www.sublimetext.com/) are best.

* A modern web browser with good debugging tools such as Chrome, Firefox, or Edge.

## Let's begin

1. Clone this repository by running
`git clone https://github.com/DunedinJS/migrating-to-modern-js.git`

1. `cd ./migrating-to-modern-js`

  _If using NVM to manage Node.js versions you can also run `nvm use` here to
  make sure that the correct version is active._

1. Checkout the `00-original` branch by running `git checkout 00-original`

1. Make sure to view the readme file for each branch.
These contain any further setup instructions and information about each stage.

1. Explore the code.

  Make changes if you'd like. To discard changes before checking out another
  branch run `git reset --hard HEAD`.

1. Checkout the next branch and continue.

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

* Configure Jest to test application logic and report code coverage

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
