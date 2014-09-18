"use strict";
var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('jsmin', function (callback) {
	gutil.log(gutil.colors.yellow('jsmin task is running'));
	callback();
});
