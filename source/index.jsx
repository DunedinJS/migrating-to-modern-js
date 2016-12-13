import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './styles.css';

// render the App component
ReactDOM.render(
  <App />, // provide the model as a property
  document.getElementById('app') // the element to attach the app to
);
