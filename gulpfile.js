var gulp = require( 'gulp' );
var fontSpider = require( 'gulp-font-spider' );
gulp.task('defualt', ['fontspider']);
  
gulp.task('fontspider', function() {
  return gulp.src('./index.html')
    .pipe(fontSpider());
});
