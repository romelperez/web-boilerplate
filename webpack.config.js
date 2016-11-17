const webpack = require('webpack');
const webpackBase = require('./webpack.base.js');
const log = require(process.cwd() + '/src/server/log');

log.app.env();

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = Object.assign({}, webpackBase, {
  entry: {
    'core':     './src/client/core/index.js',
    'home':     './src/client/home/index.js',
    'app':      './src/client/app/index.js',
    'login':    './src/client/login/index.js',
    'register': './src/client/register/index.js',
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
});
