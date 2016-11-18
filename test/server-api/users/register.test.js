import consts from '../consts';

describe('Users', function () {

  describe('GET /api/users/register', function () {

    it('Success', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/register').
        send({
          name: 'Mr X',
          email: 'mrx@gmail.com',
          pwd: '741258963'
        }).
        then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.have.property('body').to.be.an('object');
        });
    });

    it('User already taken', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/register').
        send({
          name: 'Mr X',
          email: 'mrx@gmail.com',
          pwd: '741258963'
        }).
        then(function (res) {
          throw new Error('Should not success');
        }).
        catch(function (err) {
          expect(err).to.have.status(400);
        });
    });

    it('Bad data', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/register').
        send({
          name: 'Mr# $X',
          pwd: '741258963'
        }).
        then(function (res) {
          throw new Error('Should not success');
        }).
        catch(function (err) {
          expect(err).to.have.status(400);
        });
    });

  });

});
