const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// Watcher qui surveille les modifications des fichiers dans le dossier /scss
gulp.task('watch', function () {
  gulp.watch('./scss/main.scss', gulp.parallel('buildStyles'));
})

// Tâche appelée par le Watcher qui compile le scss en css
gulp.task('buildStyles', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})