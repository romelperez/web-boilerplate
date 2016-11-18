import settings from 'server/settings';
import consts from '../consts';
import auth from '../auth';

describe('Users', function () {

  describe('POST /api/users/login', function () {

    it('Success', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/login').
        send({
          email: consts.USER.EMAIL,
          pwd: consts.USER.PWD
        }).
        then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.have.cookie(settings.session.name);
        });
    });

    it('Bad request', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/login').
        send({
          email: 'error@error.com',
          pwd: 'error-error'
        }).
        then(function (res) {
          throw res;
        }).
        catch(function (res) {
          expect(res).to.have.property('status', 400);
          expect(res).to.not.have.cookie(settings.session.name);
        });
    });

    it('Unauthorized', function () {
      return chai.
        request(consts.SERVER).
        post('/api/users/login').
        send({
          email: consts.USER.EMAIL,
          pwd: 'error-error'
        }).
        then(function (res) {
          throw res;
        }).
        catch(function (res) {
          expect(res).to.have.property('status', 401);
          expect(res).to.not.have.cookie(settings.session.name);
        });
    });

  });

  describe('GET /api/users/isauth', function () {

    it('Client is authorized', function () {
      return auth.
        login().
        then(function (agent) {
          return agent.get('/api/users/isauth');
        }).
        then(function (res) {
          expect(res).
            to.have.status(200).
            to.have.property('body').to.be.an('object').
            to.have.property('msg', true);
        });
    });

    it('Client is not authorized', function () {
      return chai.
        request(consts.SERVER).
        get('/api/users/isauth').
        then(function (res) {
          expect(res).
            to.have.status(200).
            to.have.property('body').to.be.an('object').
            to.have.property('msg', false);
        });
    });

  });

});
