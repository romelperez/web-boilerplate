import { shallow } from 'enzyme';
import React from 'react';
import Footer from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Footer', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Footer />).hasClass('main-footer');
        expect(actual).to.be.true;
      });

    });
  });
});
