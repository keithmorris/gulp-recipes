var gulp = require('gulp'),
	gutil = require('gulp-util'),
	zip = require('gulp-zip');

gulp.task('zip', function () {
	return gulp.src(['src/**/*'])
		.pipe(zip('archive.zip'))
		.pipe(gulp.dest('dest/'));
});

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in zip-archive-creation recipe'));
	callback();
});

