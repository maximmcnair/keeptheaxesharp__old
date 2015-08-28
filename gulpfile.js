/**
 * Builds app using gulp
 */

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

/*
 * Copy static files
 */
gulp.task('copyStatics', function () {
  gulp.src([
    './src/fonts/**.*'
  , './src/img/**.*'
  , './src/css/**.*'
  , './src/favicon.ico'
], {base: './src'}).pipe(gulp.dest('public/assets'));
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
    .on('error', gutil.log)
    .pipe(gulp.dest('public/assets/js/'));
});

/*
 * Javascript Linting
 */
var eslint = require('gulp-eslint');
gulp.task('eslint', function () {
  return gulp.src([
      './test/*.js'
    , './test/**/*.js'
    , './src/js/*.js'
    , './src/js/**/*.js'
    , './src/js/**/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.formatEach())
    .pipe(eslint.failOnError());
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
      port: 3600,
      livereload: true,
      fallback: 'index.html'
    }));
});

/*
 * Gulp user tasks
 */
gulp.task('default', ['copyStatics', 'sass', 'browserify', 'eslint']);
gulp.task('compiled', ['default']);

gulp.task('watch', function () {
  gulp.watch([
    'src/**/*.*',
    'src/**/**/*.*'
  ], ['default']);
});

gulp.task('dev', ['default', 'watch']);
