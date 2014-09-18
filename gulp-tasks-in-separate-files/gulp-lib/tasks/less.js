"use strict";
var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('less', function (callback) {
	gutil.log(gutil.colors.yellow('less task is running'));
	callback();
});
