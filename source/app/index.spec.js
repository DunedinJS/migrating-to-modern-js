/* eslint-env jest */

import App from './';

describe('App', () => {
  describe('isPaused', () => {
    it('returns true if state has a truthy pauseTimestamp', () => {
      const state = { pauseTimestamp: 1 };
      expect(App.prototype.isPaused.call({ state })).toBe(true);
    });

    it('returns false if state has a falsey pauseTimestamp', () => {
      const state = { pauseTimestamp: null };
      expect(App.prototype.isPaused.call({ state })).toBe(false);
    });
  });

  describe('onPause', () => {
    it('sets state pauseTimestamp to given timestamp', () => {
      const timestamp = 3000;

      // mock the setState method so that we can test the argument which it is called with
      const context = { setState: jest.fn() };

      App.prototype.onPause.call(context, timestamp);

      const arg = (context.setState.mock.calls[0] || [])[0];
      expect(arg).toEqual({ pauseTimestamp: timestamp });
    });
  });
});
