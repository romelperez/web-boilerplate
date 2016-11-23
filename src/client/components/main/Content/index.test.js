import { shallow } from 'enzyme';
import React from 'react';
import Content from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Content', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Content />).hasClass('main-content');
        expect(actual).to.be.true;
      });
    });
  });
});
