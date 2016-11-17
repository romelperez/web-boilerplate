import enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import Container from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Container', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Container />).hasClass('main-container');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
