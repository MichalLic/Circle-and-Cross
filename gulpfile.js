var PATH = {
    scss: './src/scss/**/*.scss',
    js: './src/js/**/*.js',
    js_vendor: [
        './node_modules/jquery/dist/jquery.min.js'
    ],
    css_vendor: [
        './node_modules/font-awesome/css/font-awesome.css'
    ],
    fonts_vendor: './node_modules/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}',
    DIST: './dist',
    static: [
        './src/index.html',
        './src/images/**'
    ]
};

//
// Modules
// ======================================================
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var $ = require('gulp-load-plugins')();
var os = require('os');


//
// Styles (SCSS + autoprefixer + minify)
// ======================================================
gulp.task('styles', function () {
    return gulp.src(PATH.scss)
        .pipe($.sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe($.autoprefixer({browsers: ['last 10 version']}))
        .pipe($.csso())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(PATH.DIST + '/css'))
        .pipe(browserSync.stream());
});

// Watch
gulp.task('watch', function () {

// Watch .scss files
    gulp.watch(PATH.scss, ['styles']);

    // // Watch .js files
    gulp.watch(PATH.js, ['js']);
    //
    // // Watch image files
    //gulp.watch('./img/**/*', ['image']);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('./src/*.html', ['copy']).on('change', browserSync.reload);
});

//js task
gulp.task('js', function () {
    return gulp.src(PATH.js)
        .pipe(plumber())
        .pipe($.sourcemaps.init())
        .pipe($.concat('app.js'))
        .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(PATH.DIST + '/js'))
        .pipe(browserSync.stream());
});

gulp.task('js-vendor', function () {
    return gulp.src(PATH.js_vendor)
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(PATH.DIST + '/js'))
});

gulp.task('css-vendor', function () {
    return gulp.src(PATH.css_vendor)
        .pipe($.concat('vendor.css'))
        .pipe(gulp.dest(PATH.DIST + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('fonts-vendor', function () {
    return gulp.src(PATH.fonts_vendor)
        .pipe(gulp.dest(PATH.DIST + '/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('copy', function () {
    return gulp.src(PATH.static, {base: 'src'})
        .pipe(gulp.dest(PATH.DIST));
});

// Static server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            notify: true
        }
    });

    // Watch .scss files
    gulp.watch(PATH.scss, ['styles']);

    // // Watch .js files
    gulp.watch(PATH.js, ['js']);

    // Watch vendor.js
    gulp.watch(PATH.js_vendor, ['js-vendor']);
    //
    // // Watch image files
    //gulp.watch('./img/**/*', ['image']);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('./src/*.html', ['copy']).on('change', function () {
        setTimeout(browserSync.reload, 1500);
    });
});

// Initialization
gulp.task('default', ['styles', 'copy', 'css-vendor', 'fonts-vendor', 'js', 'js-vendor', 'serve']);