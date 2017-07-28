import axios from 'axios';
import storage from 'client/tools/storage';

axios.interceptors.request.use(function (req) {
  if ((/^\/.+/).test(req.url)) {
    req.headers['x-token-auth'] = storage.local.getItem('token');
  }
  return req;
});
