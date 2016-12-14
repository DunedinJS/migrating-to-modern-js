import React from 'react';
import Model from '../app/Model';
import Display from '../display';
import Controls from '../controls';

// The main view for the application
export default function App(props) {
  return (
    <div>
      <Display model={props.model} />
      <Controls model={props.model} />
    </div>
  );
}

App.propTypes = {
  model: React.PropTypes.instanceOf(Model),
};
