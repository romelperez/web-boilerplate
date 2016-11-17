import enzyme, { shallow, mount, render } from 'enzyme';
import React, { PropTypes } from 'react';
import Content from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Content', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Content />).hasClass('main-content');
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
