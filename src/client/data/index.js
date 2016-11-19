import axios    from 'axios';
import settings from 'client/settings';

const login = function (data) {
  return axios({
    method: 'post',
    url: `${settings.api}/api/users/login`,
    data
  });
};

export default {
  login,
};
