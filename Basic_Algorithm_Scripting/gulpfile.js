'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

const DEST = 'build/';

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(babel({presets: ['es2015']})
          .on('error', function (e) {
            console.log(e);
          }))
    .pipe(rename({ extname: '.es5.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.watch('index.js', function(event) {
    gulp.run('default');
});
