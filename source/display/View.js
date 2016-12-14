import _ from 'underscore';
import Backbone from 'backbone';

// A view which displays the elapsed time in seconds
export default Backbone.View.extend({

  template: _.template('<%= seconds %> seconds'),

  initialize() {
    // re-render every second (1000 milliseconds) if not paused
    setInterval(() => {
      if (!this.model.isPaused()) {
        this.render();
      }
    }, 1000);

    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    this.$el.html(this.template({
      seconds: this.model.getSeconds(this.model.get('pauseTimestamp') || Date.now()),
    }));
  },

});
