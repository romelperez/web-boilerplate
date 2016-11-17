const path = require('path');

const srcPath = path.join(process.cwd(), '/src');

module.exports = {
  resolve: {
    fallback: srcPath
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      include: srcPath,
      exclude: /(node_modules|bower_components|static_components)/,
      query: {
        presets: [
          'react',
          'es2015',
          'stage-1'
        ]
      }
    }]
  }
};
