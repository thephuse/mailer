const gulp = require('gulp');
const fs = require('fs');
const jade = require('gulp-jade');
const empty = require('gulp-empty');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const browserSync = require('browser-sync');
const emailBuilder = require('gulp-email-builder');

const settings = JSON.parse(fs.readFileSync('./settings.json'));

function build(options, replaceLinks) {

  var emailBuilderOptions = options || {};
  var replaceProxy = (replaceLinks === true) ? replace : empty;

  gulp.src('src/styl/index.styl')
    .pipe(stylus())
    .pipe(gulp.dest('temp/'));

  return gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('temp/'))
    .pipe(emailBuilder(emailBuilderOptions))
    .pipe(replaceProxy('assets/', settings.assetsURL))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/'));

}

gulp.task('copy', function() {

  return gulp.src('assets/**/*.{jpg,jpeg,gif,png,svg}')
    .pipe(gulp.dest('dist/assets/'));

});

gulp.task('build', build);

gulp.task('test', function() {

  if (settings.litmus) {
    return build({ litmus : settings.litmus }, true);
  }

  return;

});

gulp.task('watch', function() {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch('assets/**/*.{jpg,jpeg,gif,png,svg}', ['copy']);
  gulp.watch(['src/styl/**/*.styl', 'src/jade/**/*.jade'], ['build']);
  gulp.watch('dist/index.html').on('change', browserSync.reload);

});

gulp.task('default', ['copy', 'build', 'watch']);
