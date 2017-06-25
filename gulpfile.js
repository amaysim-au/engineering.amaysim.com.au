var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    concat       = require('gulp-concat')

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src('themes/amaysim-engineering-blog/static/css/style.scss')
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest('themes/amaysim-engineering-blog/static/css') )//writes the renamed file to the destination
})


// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("themes/amaysim-engineering-blog/static/css/*", ["scss"])
})

// Set watch as default task
gulp.task("default", ["watch"])
