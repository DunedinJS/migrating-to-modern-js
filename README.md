# 00-original

Simple application built on [Backbone.js](http://backbonejs.org/).

* No package management -- third-party libraries checked in to repository
* No tests
* No module system
* No source code compilation -- developer writes code directly for the browser
* Each JavaScript file (including third-party libraries) is loaded with a separate HTML `<script>` tag
* Application source stored in a single file
* Application templates stored in HTML `<script type="text/template">` tags

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
