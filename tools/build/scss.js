const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const plumber     = require('gulp-plumber');
const sourcemaps  = require('gulp-sourcemaps');
const rename      = require('gulp-rename');
const notify      = require('gulp-notify');

var supportingBrowsers = [
  '> 3%',
  'last 2 versions',
  'ie 10'
];

gulp.task('scss', function () {
  gulp.src('client/scss/**/*.scss*')            // Выберем наш main.scss
    .pipe(plumber())
    .pipe(sourcemaps.init())         // То же самое что и с js
    .pipe(sass())                    // Скомпилируем
    .pipe(autoprefixer(supportingBrowsers)) // Добавим вендорные префиксы
    .pipe(sourcemaps.write())        // Пропишем карты
    .pipe(gulp.dest('public/css'))               
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin())                  // Сожмем
    .pipe(gulp.dest('public/css')) // И в build
    .pipe(plumber.stop())
    .pipe(notify("sass create!"));
});

gulp.task('build:watch:scss', ['scss'], function () {
  gulp.watch('client/**/*.{sass,scss}', ['scss']);
});