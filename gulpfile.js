/**
 * Builds app using gulp
 */

'use strict';

var gulp = require('gulp');

/*
 * Copy index file
 */
gulp.task('copy_index', function () {
  gulp.src('src/*.html').pipe(gulp.dest('public/'));
});

/*
 * Javascript building
 */
var browserify = require('gulp-browserify');
/* eslint-disable no-unused-vars */
var babelify = require('babelify');
/* eslint-enable no-unused-vars */

gulp.task('browserify', function () {
  return gulp.src('./src/js/app.js', {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('public/assets/js/'));
});

/*
 * Javascript Testing
 */
var mocha = require('gulp-mocha');
var babel = require('babel/register');
gulp.task('js:test', function () {
  return gulp.src('./test/testSpec.js', {read: false})
    .pipe(mocha({
      reporter: 'nyan',
      compilers: {
        js: babel
      }
    }));
});

/*
 * Sass processing
 */
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function () {
  return gulp.src('./src/sass/main.sass')
  .pipe(sourcemaps.init())
  .pipe(sass({indentedSyntax: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/assets/css'));
});

/*
 * Webserver
 */
var webserver = require('gulp-webserver');
gulp.task('webserver', function () {
  gulp.src('public')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

/*
 * Gulp user tasks
 */
gulp.task('default', ['copy_index', 'sass', 'browserify', 'js:test']);

gulp.task('compiled', ['default']);

gulp.task('watch', function () {
  gulp.watch([
    'src/**/*.*',
    'src/**/**/*.*',
    'test/*.*',
    'test/**/*.*'
  ], ['default']);
});
