/* Gulpfile */

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jshint = require('gulp-jshint')
	replace = require('gulp-replace'),
	bulkSass = require('gulp-sass-bulk-import'),
	connect = require('gulp-connect');

var sources = {
  sass: ['app/**/*.scss'],
	html: ['app/**/*.html']
};

function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

gulp.task('sass', function(){
	gulp.src( 'app/styles/main.scss' )
    .pipe(bulkSass())
		.pipe(sass({style: 'compressed'}).on('error', swallowError) )
		.pipe(gulp.dest('app/styles'))
		.pipe(connect.reload());
});

gulp.task('html_reload', function(){
	gulp.src('')
		.pipe(connect.reload());
});

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		livereload: true,
		port:8888
	});
});

gulp.task('watch', function(){
	gulp.watch(sources.sass, ['sass']);
	gulp.watch(sources.html, ['html_reload']);

});

gulp.task('default', ['connect', 'sass', 'watch']);