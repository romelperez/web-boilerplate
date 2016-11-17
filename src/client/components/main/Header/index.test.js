import enzyme, { shallow, mount, render } from 'enzyme';
import React, { PropTypes } from 'react';
import Header from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Header', function () {

      it('Has proper class name', function () {
        const el = shallow(<Header />);
        const expected = 'main-header';
        expect(el).to.have.className(expected);
      });
    });
  });
});
