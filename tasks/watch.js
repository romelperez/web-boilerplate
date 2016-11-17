const gulp = require('gulp');
const livereload = require('gulp-livereload');
const settings = require('./settings');

const dev = process.env.NODE_ENV !== 'production';

gulp.task('watch', function () {
  if (dev) {
    livereload.listen();
    gulp.watch(settings.sass.files, ['sass']);
  }
});
