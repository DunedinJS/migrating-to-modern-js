import Backbone from 'backbone';

// A model which stores and manages application data
export default Backbone.Model.extend({

  getSeconds: function() {
    var pauseTimestamp = this.get('pauseTimestamp');
    var offset = pauseTimestamp || Date.now();
    var timestamp = offset - this.get('timestamp');

    return Math.floor(timestamp / 1000);
  },

  isPaused: function() {
    return !!this.get('pauseTimestamp');
  },

  pause: function() {
    this.set({
      pauseTimestamp: Date.now()
    });
  },

  continue: function() {
    var pauseTimestamp = this.get('pauseTimestamp');
    var offset = pauseTimestamp - this.get('timestamp');

    this.set({
      timestamp: Date.now() - offset,
      pauseTimestamp: null
    });
  },

  reset: function() {
    this.set({
      timestamp: Date.now(),
      pauseTimestamp: null
    });
  }

});
