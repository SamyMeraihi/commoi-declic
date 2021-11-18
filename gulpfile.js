var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('source-files')
        .pipe(sass())    // ici on utilise gulp-sass
        .pipe(gulp.dest('destination'))
});