/**
 * File: gulpfile.js
 * Date: 30.8.2017
 * Author: Janne Hämäläinen
 * Twitter: @JanneHamalainen
 */
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on("change", reload);
  gulp.watch("*.css").on("change", reload);
});
