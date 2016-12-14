/* eslint-env jest */

import { secondsDifference } from './util';

describe('display util', () => {
  describe('secondsDifference', () => {
    it('returns number of whole seconds between given timestamps', () => {
      expect(secondsDifference(0, 0)).toBe(0);
      expect(secondsDifference(0, 1000)).toBe(1);
      expect(secondsDifference(1423, 1564)).toBe(0);
      expect(secondsDifference(423, 3000)).toBe(2);
    });
  });
});
