var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', () => {

  return gulp.
    src('./src/js/main.js').
    pipe(webpack(
      {
        output: {
          filename: 'app.js'
        }
      },
      null,
      (err, stats) => {
        //
      }
    )).
    pipe(gulp.dest('./assets/js/'));
});
