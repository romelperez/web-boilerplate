import { shallow } from 'enzyme';
import React from 'react';
import Card from './index';

describe('Component', function () {
  describe('General', function () {
    describe('Card', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Card />).hasClass('general-card');
        expect(actual).to.be.true;
      });
    });
  });
});
