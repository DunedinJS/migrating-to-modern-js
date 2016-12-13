import React from 'react';

import Display from '../display';
import Controls from '../controls';

// The main view for the application
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Display model={this.props.model} />
        <Controls model={this.props.model} />
      </div>
    );
  }

};
