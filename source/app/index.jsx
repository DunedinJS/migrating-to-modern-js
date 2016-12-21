import React from 'react';
import Display from '../display';

// The main view for the application
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timestamp: Date.now(),
    };
  }

  onPause(timestamp) {
    this.setState({
      pauseTimestamp: timestamp,
    });
  }

  onContinue(timestamp) {
    this.setState((prevState) => {
      const offset = prevState.pauseTimestamp - prevState.timestamp;
      return {
        timestamp: timestamp - offset,
        pauseTimestamp: null,
      };
    });
  }

  onReset(timestamp) {
    this.setState({
      timestamp,
      pauseTimestamp: null,
    });
  }

  isPaused() {
    return !!this.state.pauseTimestamp;
  }

  render() {
    const isPaused = this.isPaused();

    const playButton = isPaused ?
      <button onClick={() => this.onContinue(Date.now())}>Continue</button> :
      <button onClick={() => this.onPause(Date.now())}>Pause</button>;

    return (
      <div>
        <Display
          timestamp={this.state.timestamp}
          pauseTimestamp={this.state.pauseTimestamp}
          isPaused={isPaused}
        />
        <div className="controls">
          { playButton }
          <button onClick={() => this.onReset(Date.now())}>Reset</button>
        </div>
      </div>
    );
  }

}
