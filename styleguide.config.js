const pkg = require('./package');
const webpackBase = require('./webpack.base.js');

module.exports = {

  // Docs site title.
  title: pkg.name,

  // HTML template.
  template: './docs/styleguide/template.html',

  // All JS files inside `src/components`.
  components: './client/components/**/index.js',

  // Folder to publish the docs.
  styleguideDir: './docs/styleguide/',

  // Show the code snippets by default.
  showCode: false,

  // code editor theme
  highlightTheme: 'night',

  // Webpack configuration, which extends the library's with our own.
  webpackConfig: webpackBase,
};
