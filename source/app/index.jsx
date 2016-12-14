import React from 'react';
import Display from '../display';
import Controls from '../controls';

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

    return (
      <div>
        <Display
          timestamp={this.state.timestamp}
          pauseTimestamp={this.state.pauseTimestamp}
          isPaused={isPaused}
        />
        <Controls
          isPaused={isPaused}
          onPause={() => this.onPause(Date.now())}
          onContinue={() => this.onContinue(Date.now())}
          onReset={() => this.onReset(Date.now())}
        />
      </div>
    );
  }

}
