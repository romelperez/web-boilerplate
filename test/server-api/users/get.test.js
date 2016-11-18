import consts from '../consts';

describe('Users', function () {
  describe('GET /api/users/:id', function () {

    it('Get one user', function () {
      return chai.
        request(consts.SERVER).
        get('/api/users/' + consts.USER.ID).
        then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.have.property('body').to.be.an('object');
          expect(res.body).to.have.property('_id').to.be.a('string');
          expect(res.body).to.have.property('name').to.be.a('string');
          expect(res.body).to.have.property('email').to.be.a('string');
          expect(res.body).to.have.property('active').to.be.a('boolean');
          expect(res.body).to.have.property('admin').to.be.a('boolean');
          expect(res.body).to.not.have.property('hash');
        });
    });

  });
});
