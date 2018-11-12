var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var babel = require('babelify');

var b = watchify(browserify('./src/index.js', { debug: true }).transform(babel));

/**
 * This task will bundle all other js files and babelify them.
 * If you want to add other processing to the main js files, add your code here.
 */
gulp.task('copy-index-html', function () {
    gulp.src('./src/index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('./build'));
});

gulp.task('css', ['copy-index-html'], function() {
    gulp.src('./src/styles/*.css')
        .pipe(gulp.dest('./build/styles/'))
});

gulp.task('resources', ['css'], function () {
    gulp.src('./src/resources/*.css')
        .pipe(gulp.dest('./build/resources/'))
});


gulp.task('bundle', ['resources'], function () {
    return b.bundle()
        .on('error', function (err) {
            console.log(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
        })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['bundle'], function () {
    var watcher = gulp.watch('./src/**/**/**/**/*', ['refresh']);
    watcher.on('update', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});

gulp.task('browser-sync', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: './build/'
        }
    });
});

gulp.task('default', ['browser-sync']);
gulp.task('refresh', ['bundle'], browserSync.reload);