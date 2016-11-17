import enzyme, { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './index';

describe('Component', function () {
  describe('General', function () {
    describe('Card', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Card />).hasClass('general-card');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
