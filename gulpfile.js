/**
 * Builds app using gulp
 */

'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('copy_index', function () {
  gulp.src('src/*.html').pipe(gulp.dest('public/'));
});
gulp.task('default', ['copy_index']);

gulp.task('compiled', ['default']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('webserver', function () {
  gulp.src('public')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});
