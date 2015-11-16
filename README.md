# Frontend boilerplate

This is a frontend boilerplate with the following batteries:

- [Grunt](http://gruntjs.com) - Task runner
- [Browserify](http://browserify.org/) - Build modular JS apps
- [Babel](http://babeljs.io/) - JavaScript ES6 compiler
- [React](https://facebook.github.io/react/) & [React Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - JavaScript library for building user interfaces
- [SASS](http://sass-lang.com/) - CSS with superpowers
- [Compass](http://compass-style.org/) - CSS Authoring Framework using SASS
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
  - SASS
  - Compass

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
- `tasks/` - Grunt tasks
- `tests/` - Test suites
- `package.json` - Node package info
- `bower.json` - Bower dependencies
- `Gruntfile.js` - Grunt file
- `.editorconfig` - [EditorConfig](http://editorconfig.org/)
- `.jshintrc` - [JSHint](http://jshint.com/) config file
- `server.js` - [express](http://expressjs.com/) server example

## License

[MIT](./LICENSE)
