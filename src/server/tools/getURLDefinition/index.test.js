import getURLDefinition from './index';
import { expect } from 'chai';

describe('Tools', function () {

  describe('getURLDefinition', function () {

    it('Get normal definition', function () {
      const actual = getURLDefinition(' GET  /api ');
      const expected = { method: 'get', path: '/api' };
      expect(actual).to.eql(expected);
    });

    it('Ensure method text case', function () {
      const actual = getURLDefinition('PoSt /api');
      const expected = { method: 'post', path: '/api' };
      expect(actual).to.eql(expected);
    });

    it('Ensure URL base', function () {
      const actual = getURLDefinition('put /api/users/:id');
      const expected = { method: 'put', path: '/api/users/:id' };
      expect(actual).to.eql(expected);
    });

  });

});
