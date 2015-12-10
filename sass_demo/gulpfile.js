var gulp = require('gulp'),
    sass = require('gulp-sass');

//默认
gulp.task('default',function () {
  gulp.run('sass');
});

//scss => css
gulp.task('sass', function () {
  gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});
