var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(); //初始化
    reload      = browserSync.reload; // browser-sync 页面刷新


//定义默认 和运行模块
gulp.task('default',function (){
  gulp.run('min','browser-sync');
});

//min模块
gulp.task('min',function(){
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('bulid'))
    .pipe(browserSync.reload({stream:true}));
});

//监控刷新页面
gulp.task('browser-sync',function (){
  browserSync.init({
    server:{
      baseDir:'./'
    }
  });
  gulp.watch('./js/*js',['min']); //监听js
  gulp.watch("index.html").on('change', reload); //监听 html
});
