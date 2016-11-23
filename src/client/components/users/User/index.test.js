import React from 'react';
import { shallow } from 'enzyme';
import User from './index';

describe('Component', function () {
  describe('Users', function () {
    describe('User', function () {

      it('Has proper class name', function () {
        const el = shallow(<User />).hasClass('users-user');
        expect(el).to.be.true;
      });

      it('Has proper tag name', function () {
        const el = shallow(<User />).is('article');
        expect(el).to.be.true;
      });

      it('Has user identifier', function () {
        const el = shallow(<User _id={'123'} />);
        const actual = el.prop('data-id');
        expect(actual).to.equal('123');
      });

      it('Creates user photo', function () {
        const el = shallow(<User img='/img/p1.jpg' />);
        const actual = el.contains(<img src='/img/p1.jpg' />);
        expect(actual).to.be.true;
      });

      it('Creates user name', function () {
        const el = shallow(<User name={'Romel'} />);
        const actual = el.contains(<h1>Romel</h1>);
        expect(actual).to.be.true;
      });

      it('Creates user email', function () {
        const el = shallow(<User email={'romel@mail.com'} />);
        const actual = el.contains(<p><small>romel@mail.com</small></p>);
        expect(actual).to.be.true;
      });

    });
  });
});
