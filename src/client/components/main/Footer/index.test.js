import enzyme, { shallow, mount, render } from 'enzyme';
import React, { PropTypes } from 'react';
import i18n from 'shared/i18n';
import Footer from './index';

describe('Component', function () {
  describe('Main', function () {
    describe('Footer', function () {

      it('Has proper class name', function () {
        const actual = shallow(<Footer />).hasClass('main-footer');
        const expected = true;
        expect(actual).to.equal(expected);
      });

    });
  });
});
