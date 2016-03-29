# Frontend boilerplate

TODO: Add a "development", "staging" and "production" detector in a configuration
file which will run the tasks runner and the application (backend and frontend).

This is a frontend boilerplate with the following batteries:

- [Babel](http://babeljs.io/) - JavaScript ES2015 compiler
- [React](https://facebook.github.io/react/) & [React Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - JavaScript library for building user interfaces
- [SASS](http://sass-lang.com/) - CSS with superpowers
- [Compass](http://compass-style.org/) - CSS Authoring Framework using SASS
- [Foundation](foundation.zurb.com) - Responsive front-end framework
- [Bower](http://bower.io) - Frontend dependency manager
- [npm](http://npmjs.org) - Node package manager
- [Grunt](http://gruntjs.com) - Task runner
- [Browserify](http://browserify.org/) - Modular JavaScript bundler
  - [Remapify](https://github.com/joeybaker/remapify) - Alias directories for browserify
- [Livereload](http://livereload.com/) & [Livereload Chrome Plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) - Refresh HTML, CSS, JS, images and other stuff as soon as they change

Other batteries included:

- [jQuery](http://jquery.com) - JavaScript general purpose library
- [Underscore](http://underscorejs.org) - JavaScript functional library

The React library can be easily removed if you don't want to use it.

## Installation

Install system dependencies:

- [Node and npm](https://github.com/romelperez/workspace/tree/master/node) with the global packages:
  - Grunt CLI
  - Bower
- [Ruby](https://github.com/romelperez/workspace/tree/master/ruby) with the gems:
  - Ruby version ^1.9
  - SASS version ^3.4
  - Compass version ^1.0

Project dependencies:

```bash
npm install
bower install
```

Most project dependencies are needed in the development environment. In a production
environment they are not required because assets would have been created.

## Anatomy

- `src/` - Main source code
  - `js/` - JavaScript code
  - `scss/` - SASS code
- `build/` - Build folder
- `assets/` - Public assets folder
  - `js/` - JavaScript assets
  - `css/` - CSS assets
- `tests/` - Test suites
  - `unit/` - Unit testing
  - `integration/` - Integration testing
  - `benchmarks/` - Benchmarks
- `tasks/` - Grunt tasks
- `package.json` - Node package info
- `bower.json` - Bower dependencies
- `Gruntfile.js` - Grunt file
- `.editorconfig` - [EditorConfig](http://editorconfig.org/)
- `.jshintrc` - [JSHint](http://jshint.com/) config file
- `.bowerrc` - Bower config file
- `server.js` - [express](http://expressjs.com/) server example

## License

[MIT](./LICENSE)
