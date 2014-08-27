var gulp = require('gulp'),
	gutil = require('gulp-util'),
	run = require('run-sequence');

gulp.task('default', function(callback){
	gutil.log(gutil.colors.blue('Default task running in sass-compilation recipe'));
	callback();
});

