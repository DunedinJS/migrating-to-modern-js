import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import AppModel from './app/Model';

import './styles.css';

// create a model instance with the current timestamp
const model = new AppModel({
  timestamp: Date.now(),
});

// render the App component
ReactDOM.render(
  <App model={model} />, // provide the model as a property
  document.getElementById('app'), // the element to attach the app to
);
