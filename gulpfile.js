/**
 * Builds app using gulp
 */

'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
/* eslint-disable no-unused-vars */
var babelify = require('babelify');
/* eslint-enable no-unused-vars */

gulp.task('copy_index', function () {
  gulp.src('src/*.html').pipe(gulp.dest('public/'));
});

gulp.task('browserify', function () {
  return gulp.src('./src/js/app.js', {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('public/assets/js/'));
});

gulp.task('default', ['copy_index', 'browserify']);

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
