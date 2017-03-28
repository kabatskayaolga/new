var gulp = require('gulp');


//styles + autoprefixer

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


gulp.task('styles', function () {
  gulp.src('./dev/style.scss')
  	.pipe(sass({
  		outputStyle: 'compressed'
  	}))
  	.pipe(prefix('last 2 version'))
    .pipe(gulp.dest('./site/'));
});


// templates

var htmlmin = require('gulp-htmlmin');


gulp.task('templates', function () {
  gulp.src('./dev/*.html')
  	.pipe(htmlmin({
  		collapseWhitespace: true
  	}))
  	
    .pipe(gulp.dest('./site/'));
});


//js

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function (){
	gulp.src('./dev/js/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./site/'));
});



gulp.task('default', ['styles', 'templates', 'scripts'])