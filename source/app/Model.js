import Backbone from 'backbone';

// A model which stores and manages application data
export default Backbone.Model.extend({

  getSeconds: function(untilTimestamp) {
    var timestamp = untilTimestamp - this.get('timestamp');

    return Math.floor(timestamp / 1000);
  },

  isPaused: function() {
    return !!this.get('pauseTimestamp');
  },

  pause: function(timestamp) {
    this.set({
      pauseTimestamp: timestamp
    });
  },

  continue: function(timestamp) {
    var pauseTimestamp = this.get('pauseTimestamp');
    var offset = pauseTimestamp - this.get('timestamp');

    this.set({
      timestamp: timestamp - offset,
      pauseTimestamp: null
    });
  },

  reset: function(timestamp) {
    this.set({
      timestamp: timestamp,
      pauseTimestamp: null
    });
  }

});
