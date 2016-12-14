import _ from 'underscore';
import Backbone from 'backbone';

import template from './template.html';

// A view which manages the pause, continue, and reset buttons
export default class ControlsView extends Backbone.View {

  initialize() {
    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  }

  render() {
    this.$el.html(this.template({
      isPaused: this.model.isPaused(),
    }));
  }

  onPause() {
    this.model.pause(Date.now());
  }

  onContinue() {
    this.model.continue(Date.now());
  }

  onReset() {
    this.model.reset(Date.now());
  }

}

ControlsView.prototype.template = _.template(template);

ControlsView.prototype.events = {
  'click .pause': 'onPause',
  'click .continue': 'onContinue',
  'click .reset': 'onReset',
};
