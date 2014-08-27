var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	run = require('run-sequence');

var compressCss = false,
	watching = false;

gulp.task('less', function () {
	var stream = gulp.src('less/styles.less')
		.pipe(less({
			compress: compressCss
		}).on('error', function (err) {
			if (!watching) {
				throw err;
			} else {
				gutil.log(gutil.colors.red('Error:'), err.message)
			}
		}))
		.pipe(gulp.dest('css/'));

	// don't return the stream if you're watching otherwise gulp will fail after a compilation error.
	if (!watching) {
		return stream;
	}
});

gulp.task('watch', ['less'], function () {
	watching = true;
	gulp.watch(['**/*.less'], ['less']);
});

gulp.task('dist', function (callback) {
	compressCss = true;
	run('less', callback);
});
gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in less-compilation recipe'));
	callback();
});

