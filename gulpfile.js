var gulp = require('gulp');

/** PLUGINS **/
var sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCss = require('gulp-clean-css');

var paths = {
    components: ['src/components/**/*.scss'],
    app: ['src/app/*.scss']
};

var tasks = ['watch-sass', 'components-sass', 'app-sass'];

function compileCss(url) {
    return gulp.src(url, { base: process.cwd() })
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(rename(function(path) {
            path.basename += '.component'
            path.extname = '.css';
        }))
        .pipe(gulp.dest('./'));
}

// Compile all sass files into css files
gulp.task('components-sass', function() {
    return compileCss(paths.components);
});

// Compile all sass files into css files
gulp.task('app-sass', function() {
    return compileCss(paths.app);
});

gulp.task('watch-sass', function() {
    gulp.watch(paths.components, ['components-sass']);
    gulp.watch(paths.app, ['app-sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', tasks);