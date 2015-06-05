var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify');

gulp.task('stylus', function () {
    gulp.src(['./styl/**/*.styl', '!styl/**/_*'])
        .pipe(stylus({
            compress: true,
            use: [nib(), jeet(), rupture()]}))
        .pipe(gulp.dest('./rendered/css'))
        .pipe(connect.reload());
});

gulp.task('compressjs', function() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./rendered/js'));
});

gulp.task('watch', function () {
    gulp.watch(['./styl/**/*.styl'], ['stylus']);
    gulp.watch(['./js/*.js'], ['compressjs']);
});

gulp.task('copyfiles', function() {
   gulp.src('./fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./rendered/fonts'));

   gulp.src('./README.md')
   .pipe(gulp.dest('./rendered'));

   gulp.src('./img/**/*')
   .pipe(gulp.dest('./rendered/img'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'rendered',
        livereload: true
    });
});

gulp.task('default', [
    'stylus',
    'connect',
    'watch',
    'copyfiles'
]);