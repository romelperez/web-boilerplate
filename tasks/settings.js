let local;
try {
  local = require('./local');
} catch (e) {
  local = {};
}

const conf = {
  sass: {
    files: [
      './src/**/*.scss'
    ],
    includePaths: [
      './src',
      './node_modules/foundation-sites/scss',
      './node_modules/vulcanval/src/scss/jquery'
    ],
    output: './public/css',
  }
};

Object.assign(conf, local);

module.exports = conf;
