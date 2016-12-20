import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from 'backbone';

// Load the application when the DOM is ready
$(function() {

  // query templates from the DOM and compile to Underscore template funcitons
  var templates = {
    app: _.template($('#template-app').html()),
    display: _.template($('#template-display').html()),
    controls: _.template($('#template-controls').html())
  };

  // The main view for the application
  class AppView extends Backbone.View<AppModel> {
  
    template: (data?: any) => string;
    displayView: DisplayView;
    controlsView: ControlsView;

    constructor(options: any) {
      super(options);
      this.template = templates.app;
    }

    render() {
      // render the view template
      this.$el.html(this.template());

      // create instances for child-views
      this.displayView = new DisplayView({
        el: this.$('.display'), // the element to attach the child-view to
        model: this.model // provide the same model to the child-view
      });
      this.controlsView = new ControlsView({
        el: this.$('.controls'),
        model: this.model
      });

      // render child-views
      this.displayView.render();
      this.controlsView.render();

      return this;
    }

  }

  // A view which displays the elapsed time in seconds
  class DisplayView extends Backbone.View<AppModel> {

    template: (data: any) => string;

    constructor(options: any) {
      super(options);
      this.template = templates.display;
    }

    initialize() {
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
    }

    render() {
      this.$el.html(this.template({
        seconds: this.model.getSeconds()
      }));

      return this;
    }

  }

  // A view which manages the pause, continue, and reset buttons
  class ControlsView extends Backbone.View<AppModel> {

    template: (data: any) => string;

    constructor(options: any) {
      super(options);

      this.template = templates.controls;
    }

    events() {
      return {
        'click .pause': 'onPause',
        'click .continue': 'onContinue',
        'click .reset': 'onReset'
      };
    }

    initialize() {
      // re-render on model change
      this.listenTo(this.model, 'change', this.render);
    }

    render() {
      this.$el.html(this.template({
        isPaused: this.model.isPaused()
      }));

      return this;
    }

    onPause() {
      this.model.pause();
    }

    onContinue() {
      this.model.continue();
    }

    onReset() {
      this.model.reset();
    }

  }

  // A model which stores and manages application data
  class AppModel extends Backbone.Model {

    getSeconds() {
      var pauseTimestamp = this.get('pauseTimestamp');
      var offset = pauseTimestamp || Date.now();
      var timestamp = offset - this.get('timestamp');

      return Math.floor(timestamp / 1000);
    }

    isPaused() {
      return !!this.get('pauseTimestamp');
    }

    pause() {
      this.set({
        pauseTimestamp: Date.now()
      });
    }

    continue() {
      var pauseTimestamp = this.get('pauseTimestamp');
      var offset = pauseTimestamp - this.get('timestamp');

      this.set({
        timestamp: Date.now() - offset,
        pauseTimestamp: null
      });
    }

    reset() {
      this.set({
        timestamp: Date.now(),
        pauseTimestamp: null
      });
    }

  }

  // create a model instance with the current timestamp
  var appModel = new AppModel({
    timestamp: Date.now()
  });

  // create an AppView instance
  var appView = new AppView({
    el: $('#app'), // the element to attach the app to
    model: appModel // the model to use
  });

  // render the app
  appView.render();

});
