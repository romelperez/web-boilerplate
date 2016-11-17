window.$ = window.jQuery = require('jquery');

import 'babel-polyfill';
import 'vulcanval';
import 'vulcanval/bundle/js/jquery/intern';

import analytics from './analytics';
import loader from './loader';

$(document).ready(function () {
  loader();
  analytics();
});
