const path = require('path');
const webpack = require('webpack');
const baseSettings = require('./webpack.base.js');

const production = process.env.NODE_ENV === 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      production ? 'production' : 'development'
    )
  })
];

if (production) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = Object.assign(baseSettings, {
  entry: {
    'app': './client/index.js'
  },
  output: {
    path: path.resolve(__dirname, './public/js/'),
    filename: '[name].js'
  },
});
