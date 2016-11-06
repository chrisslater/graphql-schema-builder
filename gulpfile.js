'use strict';

const gulp  = require('gulp');
const tsc   = require('gulp-typescript');
const typescript = require('typescript');

const tsDtsProject = tsc.createProject('tsconfig.json', {
    declaration: true,
    noResolve: false,
    typescript,
    // noEmitOnError: false,
});

gulp.task('build:dts', function() {
  return gulp.src([
    'src/**/*.ts',
  ])
  .pipe(tsDtsProject())
  .on('error', function (err) {
    process.exit(1);
  })
  .pipe(gulp.dest('build/dts'));
});

var tsEsProject = tsc.createProject('tsconfig.json', { module : 'es2015', typescript });

gulp.task('build:es', function() {
    return gulp.src([
        'src/**/*.ts'
    ])
    .pipe(tsEsProject())
    .on('error', function (err) {
        process.exit(1);
    })
    .js.pipe(gulp.dest('build/es/'));
});