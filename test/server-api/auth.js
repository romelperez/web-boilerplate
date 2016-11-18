import consts from './consts';

function login () {

  const user = consts.USER;
  const agent = chai.request.agent(consts.SERVER);

  return new Promise(function (resolve) {
    agent.
      post('/api/users/login').
      send({
        email: user.EMAIL,
        pwd: user.PWD
      }).
      then(function () {
        resolve(agent);
      });
  });
}

export default { login };
