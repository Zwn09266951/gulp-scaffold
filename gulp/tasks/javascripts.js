
var gulp = require('gulp');
var config = require('../config').js;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('javascripts', function () {
  return gulp.src(config.src)
      // .pipe(gulp.dest(config.dest))
      .pipe(concat('main.js')).pipe(uglify()).pipe(gulp.dest('./dist/static/js'));
});
// gulp.task("javascripts",function(){
//     // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
//
// })
