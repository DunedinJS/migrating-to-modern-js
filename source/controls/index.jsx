import React from 'react';
import Model from '../app/Model';

// A view which manages the pause, continue, and reset buttons
export default class Controls extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    // explicitly bind method to this component instance
    this.onPauseTimestampChange = this.onPauseTimestampChange.bind(this);
  }

  componentDidMount() {
    this.onPauseTimestampChange(this.props.model);

    // listen to Backbone Model event
    this.props.model.on('change:pauseTimestamp', this.onPauseTimestampChange);
  }

  componentWillUnmount() {
    // stop listening to Backbone Model event
    this.props.model.off('change:pauseTimestamp', this.onPauseTimestampChange);
  }

  onPauseTimestampChange(model) {
    this.setState({
      isPaused: model.isPaused(),
    });
  }

  onPause() {
    this.props.model.pause(Date.now());
  }

  onContinue() {
    this.props.model.continue(Date.now());
  }

  onReset() {
    this.props.model.reset(Date.now());
  }

  render() {
    const playButton = this.state.isPaused ?
      <button onClick={() => this.onContinue()}>Continue</button> :
      <button onClick={() => this.onPause()}>Pause</button>;

    return (
      <div className="controls">
        {playButton}
        <button onClick={() => this.onReset()}>Reset</button>
      </div>
    );
  }

}

Controls.propTypes = {
  model: React.PropTypes.instanceOf(Model),
};
