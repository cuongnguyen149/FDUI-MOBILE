/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss']
};

var bundlePath = './www/js';

var coreFiles = [
    './www/core/bootstrapper.js',
    './www/core/securityProvider.js',
    './www/core/routes.js',
    './www/core/serviceBase.js',
    './www/core/coreService.js',
    './www/core/viewmodelBase.js'];
var coreBundleFile = 'core_bundle.js';

var appFiles = ['./www/const/*.js', './www/app/**/*.js', './www/service/**/*.js', './www/filter/**/*.js', './www/directive/**/*.js'];
var appBundleFile = 'app_bundle.js';

gulp.task('default', ['sass', 'debug']);

gulp.task('sass', function(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

//---------- RELEASE -----------//

gulp.task('release.bundleCoreWithSourceMap', function () {
    gulp.src(coreFiles)
            .pipe(concat(coreBundleFile))
            .pipe(sourcemaps.init())
            .pipe(gulp.dest(bundlePath))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(bundlePath));
});


gulp.task('release.bundleAppWithSourceMap', function () {
    gulp.src(appFiles)
            .pipe(concat(appBundleFile))
            .pipe(sourcemaps.init())
            .pipe(gulp.dest(bundlePath))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(bundlePath));
});

gulp.task('release.bundleCore', function () {
    gulp.src(coreFiles)
            .pipe(concat(coreBundleFile))
            .pipe(uglify())
            .pipe(gulp.dest(bundlePath));
});

gulp.task('release.bundleApp', function () {
    gulp.src(appFiles)
            .pipe(concat(appBundleFile))
            .pipe(uglify())
            .pipe(gulp.dest(bundlePath));
});

gulp.task('release', ['release.bundleCore', 'release.bundleApp']);
gulp.task('release.sourcemap', ['release.bundleCoreWithSourceMap', 'release.bundleAppWithSourceMap']);

//---------- DEBUG -----------//

gulp.task('debug.bundleCore', function () {
    gulp.src(coreFiles)
            .pipe(concat(coreBundleFile))
            .pipe(gulp.dest(bundlePath));
});

gulp.task('debug.bundleApp', function () {
    gulp.src(appFiles)
            .pipe(concat(appBundleFile))
            .pipe(gulp.dest(bundlePath));
});

gulp.task('debug', ['debug.bundleCore', 'debug.bundleApp']);
