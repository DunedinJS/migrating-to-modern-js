import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import Display from '../display/View';
import Controls from '../controls/View';

// The main view for the application
export default class AppView extends Backbone.View {

  render() {
    // render React components for child-views
    ReactDOM.render(
      <div>
        <Display model={this.model} />
        <Controls model={this.model} />
      </div>,
      this.el
    );
  }

};
