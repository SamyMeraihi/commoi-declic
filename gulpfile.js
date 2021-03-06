const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tâche appelée par le Watcher qui compile le scss en css
gulp.task('buildStyles', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

// Watcher qui surveille les modifications des fichiers dans le dossier /scss
gulp.task('watch', function () {
  return new Promise(function (resolve, reject) {
    gulp.watch('./scss/*.scss', gulp.parallel('buildStyles'));
    resolve();
  });
})