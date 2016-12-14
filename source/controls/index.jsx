import React from 'react';

// A view which manages the pause, continue, and reset buttons
export default function Controls(props) {
  const playButton = props.isPaused ?
    <button onClick={props.onContinue}>Continue</button> :
    <button onClick={props.onPause}>Pause</button>;

  return (
    <div className="controls">
      {playButton}
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
}

Controls.propTypes = {
  isPaused: React.PropTypes.bool,
  onContinue: React.PropTypes.function,
  onPause: React.PropTypes.function,
  onReset: React.PropTypes.function,
};
