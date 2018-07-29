var gulp = require('gulp'),
    babel = require('gulp-babel');

var CONFIG = {
    src: {
        js: 'src/js/'
    },
    dest: {
        js: {
            dir: 'js/'
        }
    }
};

gulp.task('js', function () {
    return gulp.src([
        CONFIG.src.js + '*.js'
    ])
        .pipe(babel({presets: ['react']}))
        .pipe(gulp.dest(CONFIG.dest.js.dir));
});

gulp.task('default', function () {
    gulp.run('js');
});
