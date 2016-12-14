import Backbone from 'backbone';

// A model which stores and manages application data
export default class AppModel extends Backbone.Model {

  getSeconds(untilTimestamp) {
    const timestamp = untilTimestamp - this.get('timestamp');

    return Math.floor(timestamp / 1000);
  }

  isPaused() {
    return !!this.get('pauseTimestamp');
  }

  pause(timestamp) {
    this.set({
      pauseTimestamp: timestamp,
    });
  }

  continue(timestamp) {
    const pauseTimestamp = this.get('pauseTimestamp');
    const offset = pauseTimestamp - this.get('timestamp');

    this.set({
      timestamp: timestamp - offset,
      pauseTimestamp: null,
    });
  }

  reset(timestamp) {
    this.set({
      timestamp,
      pauseTimestamp: null,
    });
  }

}
