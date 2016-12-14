import _ from 'underscore';
import Backbone from 'backbone';

import template from './template.html';
import DisplayView from '../display/View';
import ControlsView from '../controls/View';

// The main view for the application
export default class AppView extends Backbone.View {

  render() {
    // render the view template
    this.$el.html(this.template());

    // create instances for child-views
    this.displayView = new DisplayView({
      el: this.$('.display'), // the element to attach the child-view to
      model: this.model, // provide the same model to the child-view
    });
    this.controlsView = new ControlsView({
      el: this.$('.controls'),
      model: this.model,
    });

    // render child-views
    this.displayView.render();
    this.controlsView.render();
  }

}

AppView.prototype.template = _.template(template);
