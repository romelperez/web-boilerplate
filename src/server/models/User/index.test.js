import User from './index';
import { expect } from 'chai';

describe('Models', function () {

  describe('User', function () {

    it('toObject()', function () {
      const model = new User({
        name: 'Romel',
        email: 'romel@mail.com',
        active: true
      });
      const actual = model.toObject();
      const expected = { name: 'Romel', email: 'romel@mail.com', active: true };
      delete actual._id;
      expect(actual).to.eql(expected);
    });

  });

});
