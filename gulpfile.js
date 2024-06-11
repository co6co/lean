const gulp=require('gulp')
const concat =require('gulp-concat')
const autoprefixer=require('gulp-autoprefixer')
const uglify=require('gulp-uglify')
const sass =require("gulp-sass")(require('sass'))
const rename=require('gulp-rename') 

//process html
gulp.task("taskHTML",async function(){
    return gulp.src('./src/index.html') 
    .pipe(gulp.dest('./dist/'))
})

//process css
gulp.task("taskCSS",async function(){
    return gulp.src('./src/scss/main.scss')
    .pipe(sass({outputStyled:'nested'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename('dist.main.css'))
    .pipe(gulp.dest('./dist/css/'))
})

//process js
gulp.task("taskJs",async function(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify()) 
    .pipe(gulp.dest('./dist/js/'))
})


//watch
gulp.task("watch",async function(){
   gulp.watch("./src/scss/**/*.scss",gulp.series('taskCSS'))
   gulp.watch("./src/js/**/*.js",gulp.series('taskJS'))
   gulp.watch("./src/index.html",gulp.series('taskHTML'))
})