import React from 'react';
import { secondsDifference } from './util';

// A view which displays the elapsed time in seconds
export default class Display extends React.Component {

  componentDidMount() {
    // refresh state second (1000 milliseconds)
    // setting the state triggers a re-render by default
    this.timerID = setInterval(() => this.setState(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const seconds = secondsDifference(
      this.props.timestamp,
      this.props.pauseTimestamp || Date.now()
    );

    return <div className="display">{ seconds } seconds</div>;
  }

};
