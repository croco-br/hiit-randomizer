const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const path = require('path');

const distFolder = path.resolve(__dirname, 'dist');
const srcFolder = path.resolve(__dirname, 'src');
console.log(distFolder);
console.log(srcFolder);

gulp.task('clean', function () {
    return gulp.src(distFolder, { read: false })
        .pipe(clean({ force: true }))
        .pipe(gulp.dest(distFolder));
});

gulp.task('html', function () {
    var html = srcFolder + '//*.html';
    console.log(html);
    return gulp.src(html)
        .pipe(htmlmin(
            {
                collapseWhitespace: true,
                removeComments: true
            }))
        .pipe(gulp.dest(distFolder))
});

gulp.task('css', function () {
    var css = srcFolder + '//assets//css//*.css';
    var dCss = distFolder + '//assets//css';

    console.log(css);
    console.log(dCss);

    return gulp.src(css)
        .pipe(minifyCSS())
        .pipe(gulp.dest(dCss))
});

gulp.task('fonts', function () {
    var fonts = srcFolder + '//assets//fonts//*.*';
    var dFonts = distFolder + '//assets//fonts//';

    console.log(fonts);
    console.log(dFonts);

    return gulp.src(fonts)
        .pipe(gulp.dest(dFonts))
});

gulp.task('png', function () {
    var png = srcFolder + '//assets//css//images//*.png';
    var dpng = distFolder + '//assets//css//images';

    console.log(png);
    console.log(dpng);

    return gulp.src(png)
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 7 })
        ]))
        .pipe(gulp.dest(dpng))
});

gulp.task('img', function () {
    var img = srcFolder + '//images//*.jpg';
    var dImg = distFolder + '//images';

    console.log(img);
    console.log(dImg);

    return gulp.src(img)
        .pipe(imagemin([
            imagemin.gifsicle(
                { interlaced: true }
            ),
            imagemin.jpegtran(
                {
                    progressive: true
                }),
            imagemin.optipng({ optimizationLevel: 7 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ], {
                verbose: true
            }))
        .pipe(gulp.dest(dImg))
});

gulp.task('js', function () {

    var js = srcFolder + '//assets//js//*.js';
    var dJs = distFolder + '//assets//js';

    console.log(js);
    console.log(dJs);

    return gulp.src(js)
        .pipe(uglify())
        .pipe(gulp.dest(dJs))
});


gulp.task('xml', function () {

    var xml = srcFolder + '//*.xml';
    console.log(xml);
    return gulp.src(xml)
        .pipe(gulp.dest(distFolder));
});

gulp.task('robots', function () {

    var txt = srcFolder + '//robots.txt';
    console.log(txt);
    return gulp.src(txt)
        .pipe(gulp.dest(distFolder));
});

gulp.task('default', gulpSequence(['clean'], 'css', 'png', 'img', 'js', 'xml', 'fonts', 'html', 'robots'));