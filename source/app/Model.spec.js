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

  describe('getSeconds', () => {

    it('returns number of whole seconds between model timestamp and given timestamp', () => {
      expect(AppModel.prototype.getSeconds.call(
        new Backbone.Model({ timestamp: 0 }),
        0
      )).toBe(0);

      expect(AppModel.prototype.getSeconds.call(
        new Backbone.Model({ timestamp: 0 }),
        1000
      )).toBe(1);

      expect(AppModel.prototype.getSeconds.call(
        new Backbone.Model({ timestamp: 1423 }),
        1564
      )).toBe(0);

      expect(AppModel.prototype.getSeconds.call(
        new Backbone.Model({ timestamp: 423 }),
        3000
      )).toBe(2);
    });

  });

  describe('pause', () => {

    it('sets model pauseTimestamp to given timestamp', () => {
      const model = new AppModel();
      const timestamp = 3000;

      model.pause(timestamp);
      expect(model.get('pauseTimestamp')).toBe(timestamp);
    });
  });

});
