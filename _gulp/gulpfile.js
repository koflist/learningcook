var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var rootDir = "../";

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: rootDir
        }
    });

    gulp.watch(rootDir + '/less/**/*.less', ['compile-less']);

    gulp.watch(rootDir + '/**/*.html').on('change', reload);


});

gulp.task('compile-less', function() {
    gulp.src(rootDir + '/less/**.less')
        .pipe(less())
        .pipe(gulp.dest(rootDir + '/css/'))
        .pipe(reload({ stream: true }))
});
