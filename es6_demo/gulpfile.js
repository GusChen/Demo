var gulp = require('gulp'),
    babel = require('gulp-babel');

//默认
gulp.task('default',function () {
  gulp.run('babel');
});

//es6=> es5
gulp.task('babel', function () {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});
