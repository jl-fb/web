const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHTML'], () => {
    gulp.src('src/sass/index.scss')/* Index importa todos os outros arquivos .scss */
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments":true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

/* simplesmente copiar o arquivo de index para build */

gulp.task('copiarHTML', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})