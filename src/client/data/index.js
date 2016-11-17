import axios    from 'axios';
import settings from 'client/settings';

const resource1 = function (data) {
  return axios({
    method: 'get',
    url: `${settings.api}/api/resource1`,
    data
  });
};

export default {
  resource1,
};
