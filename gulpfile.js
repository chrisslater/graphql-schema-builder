'use strict';

const gulp  = require('gulp');
const tsc   = require('gulp-typescript');
const typescript = require('typescript');

const polyfills = [
  'core-js/es6/promise.js',
  'node_modules/@types/**/*.ts',
];

const tsDtsProject = tsc.createProject('tsconfig.json', {
  declaration: true,
  noResolve: false,
  typescript,
});

gulp.task('build:dts', function() {
  return gulp.src([
    'src/**/*.ts',
  ].concat(polyfills))
  .pipe(tsDtsProject())
  // .on('error', function (err) {
  //   process.exit(1);
  // })
  .dts
  .pipe(gulp.dest('build/dts'));
});

const tsEsProject = tsc.createProject('tsconfig.json', {
  module : 'es6',
  typescript,
});

gulp.task('build:es', function() {
  return gulp.src([
    'src/**/*.ts'
  ].concat(polyfills))
  .pipe(tsEsProject())
  // .on('error', function (err) {
  //     process.exit(1);
  // })
  .js.pipe(gulp.dest('build/es/'));
});

var tsJsProject = tsc.createProject('tsconfig.json', typescript);

gulp.task('build:js', function() {
  return gulp.src([
    'src/**/*.ts',
  ].concat(polyfills))
  .pipe(tsJsProject())
  // .on('error', function (err) {
  //     process.exit(1);
  // })
  .js.pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['build:js', 'build:es', 'build:dts']);