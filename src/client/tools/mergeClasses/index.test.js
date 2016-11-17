import mergeClasses from './index.js';

describe('Tools', function () {
  describe('mergeClasses', function () {

    it('Should return empty string without parameters', function () {
      const actual = mergeClasses();
      const expected = '';
      expect(actual).to.equal(expected);
    });

    it('Should parse normal classes', function () {
      const actual = mergeClasses('a', 'b-x', 'c');
      const expected = 'a b-x c';
      expect(actual).to.equal(expected);
    });

    it('Should not count falsy values', function () {
      const actual = mergeClasses('a', 0, null, 'b', undefined, false, 'c');
      const expected = 'a b c';
      expect(actual).to.equal(expected);
    });

    it('Should parse objects and merge classes', function () {
      const actual = mergeClasses('a', { b: true }, 'c');
      const expected = 'a b c';
      expect(actual).to.equal(expected);
    });

    it('Should parse objects with falsy values', function () {
      const actual = mergeClasses('a', { b: true }, 'c', { d: true, e: false }, 'f', { g: 0 });
      const expected = 'a b c d f';
      expect(actual).to.equal(expected);
    });

    it('Should merge without duplicating', function () {
      const actual = mergeClasses('a-x', { 'b-y': true }, 'c', 'd', 'a-x', { 'b-y': true }, { c: false }, 'd');
      const expected = 'a-x b-y d';
      expect(actual).to.equal(expected);
    });

    it('Should merge with multiple names', function () {
      const actual = mergeClasses('a b c', 'd', 'a c', 'a b', 'd');
      const expected = 'a b c d';
      expect(actual).to.equal(expected);
    });
  });
});
