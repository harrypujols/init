var gulp =        require('gulp'),
    sass =        require('gulp-sass'),
    browsersync = require('browser-sync').create();

gulp.task('serve', ['sass'], function(){
  browsersync.init({
    server: './'
  });

  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browsersync.reload);
});

gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browsersync.stream());
});

gulp.task('default', ['serve']);
