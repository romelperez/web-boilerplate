import { shallow } from 'enzyme';
import React from 'react';
import Container from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Container', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Container />).hasClass('main-container');
        expect(actual).to.be.true;
      });
    });
  });
});
