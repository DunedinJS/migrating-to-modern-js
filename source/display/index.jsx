import React from 'react';
import Model from '../app/Model';

// A view which displays the elapsed time in seconds
export default class Display extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };

    // explicitly bind method to this component instance
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // tick every second (1000 milliseconds) if not paused
    this.timerID = setInterval(
      this.tick,
      1000,
    );

    // listen to Backbone Model event
    this.props.model.on('change:pauseTimestamp', this.tick);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);

    // stop listening to Backbone Model event
    this.props.model.off('change:pauseTimestamp', this.tick);
  }

  tick() {
    if (!this.props.model.isPaused()) {
      const seconds = this.props.model.getSeconds(
        this.props.model.get('pauseTimestamp') || Date.now(),
      );

      this.setState({ seconds });
    }
  }

  render() {
    return <div className="display">{this.state.seconds} seconds</div>;
  }

}

Display.propTypes = {
  model: React.PropTypes.instanceOf(Model),
};
