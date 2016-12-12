import _ from 'underscore';
import Backbone from 'backbone';

import template from './template.html';

// A view which manages the pause, continue, and reset buttons
export default Backbone.View.extend({

  template: _.template(template),

  events: {
    'click .pause': 'onPause',
    'click .continue': 'onContinue',
    'click .reset': 'onReset'
  },

  initialize: function() {
    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template({
      isPaused: this.model.isPaused()
    }));
  },

  onPause: function() {
    this.model.pause();
  },

  onContinue: function() {
    this.model.continue();
  },

  onReset: function() {
    this.model.reset();
  }

});
