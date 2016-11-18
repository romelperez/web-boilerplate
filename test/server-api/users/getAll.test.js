import consts from '../consts';

describe('Users', function () {
  describe('GET /api/users/', function () {

    it('Get all users', function () {
      return chai.
        request(consts.SERVER).
        get('/api/users').
        then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.have.property('body').to.be.an('array');

          res.body.forEach(function (user) {
            expect(user).to.be.an('object');
            expect(user).to.have.property('_id').to.be.a('string');
            expect(user).to.have.property('name').to.be.a('string');
            expect(user).to.have.property('email').to.be.a('string');
          });
        });
    });

  });
});
