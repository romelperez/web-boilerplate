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

const getAllUsers = function () {
  return axios({
    method: 'get',
    url: `${settings.api}/api/users`
  });
};

const getUser = function (id, data) {
  return axios({
    method: 'get',
    url: `${settings.api}/api/users/${id}`,
    data
  });
};

export default {
  login,
  register,
  getAllUsers,
  getUser
};
