require('./tasks/sass');
require('./tasks/watch');

const gulp = require('gulp');
const log = require(process.cwd() + '/src/server/log');

log.app.env();

gulp.task('default', ['sass', 'watch']);
