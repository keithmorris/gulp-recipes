"use strict";
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	run = require('run-sequence');

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.yellow('default task is running'));
	run('jsmin','less', callback);
});
