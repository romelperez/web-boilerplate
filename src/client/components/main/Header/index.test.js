import { shallow } from 'enzyme';
import React from 'react';
import Header from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Header', function () {

      it('Has proper class name', function () {
        const el = shallow(<Header />).hasClass('main-header');
        expect(el).to.be.true;
      });
    });
  });
});
