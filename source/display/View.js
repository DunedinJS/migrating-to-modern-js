import _ from 'underscore';
import Backbone from 'backbone';

// A view which displays the elapsed time in seconds
export default Backbone.View.extend({

  template: _.template('<%= seconds %> seconds'),

  initialize: function() {
    // save reference to the correct this context
    var self = this;

    // re-render every second (1000 milliseconds) if not paused
    window.setInterval(function() {
      if (!self.model.isPaused()) {
        self.render();
      }
    }, 1000);

    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template({
      seconds: this.model.getSeconds(this.model.get('pauseTimestamp') || Date.now())
    }));
  }

});
