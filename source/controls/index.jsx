import React from 'react';

// A view which manages the pause, continue, and reset buttons
export default class Controls extends React.Component {

  render() {
    const playButton = this.props.isPaused ?
      <button onClick={this.props.onContinue}>Continue</button> :
      <button onClick={this.props.onPause}>Pause</button>;

    return (
      <div className="controls">
        {playButton}
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    );
  }

};
