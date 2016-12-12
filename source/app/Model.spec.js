import AppModel from './Model';
import Backbone from 'backbone';

describe('AppModel', () => {

  describe('isPaused', () => {

    it('returns true if model has a truthy pauseTimestamp', () => {
      const model = new Backbone.Model({ pauseTimestamp: 23456 });
      expect(AppModel.prototype.isPaused.call(model)).toBe(true);
    });

    it('returns false if model has a falsey pauseTimestamp', () => {
      const model = new Backbone.Model({ pauseTimestamp: null });
      expect(AppModel.prototype.isPaused.call(model)).toBe(false);
    });

  });

});
