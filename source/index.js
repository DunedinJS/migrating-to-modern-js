import $ from 'jquery';

import AppView from './app/View';
import AppModel from './app/Model';

import './styles.css';

// Load the application when the DOM is ready
$(function() {

  // create a model instance with the current timestamp
  var appModel = new AppModel({
    timestamp: Date.now()
  });

  // create an AppView instance
  var appView = new AppView({
    el: $('#app'), // the element to attach the app to
    model: appModel // the model to use
  });

  // render the app
  appView.render();

});
