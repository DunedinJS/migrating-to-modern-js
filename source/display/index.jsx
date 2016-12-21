import React from 'react';
import { secondsDifference } from './util';

// A view which displays the elapsed time in seconds
export default class Display extends React.Component {

  componentDidMount() {
    // re-render every second (1000 milliseconds)
    this.timerID = setInterval(() => this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const seconds = secondsDifference(
      this.props.timestamp,
      this.props.pauseTimestamp || Date.now(),
    );

    return <div className="display">{ seconds } seconds</div>;
  }

}

Display.propTypes = {
  timestamp: React.PropTypes.number,
  pauseTimestamp: React.PropTypes.number,
};
