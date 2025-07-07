const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('./src/style/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css/'));
}

function optimizeImagens() {
    return gulp.src('./src/image/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image/'));
}


exports.default = gulp.parallel(style, optimizeImagens);
exports.watch = function() {
    gulp.watch('./src/style/*.scss', gulp.parallel(style))
}