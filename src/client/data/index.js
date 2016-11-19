import axios    from 'axios';
import settings from 'client/settings';

const login = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/users/login`,
    data
  });
};

const register = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/users/register`,
    data
  });
};

export default {
  login,
  register
};
