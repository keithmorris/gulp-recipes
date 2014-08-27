var gulp = require('gulp'),
	gutil = require('gulp-util'),
	run = require('run-sequence'),
	sass = require('gulp-sass');

var outputStyle = 'compressed',// 'nested' (default), 'compressed' ('expanded' and 'compact' are not yet supported)
	watching = false;

gulp.task('sass', function () {
	var stream = gulp.src('sass/styles.scss')
		.pipe(sass({
			outputStyle: outputStyle
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

gulp.task('watch', ['sass'], function () {
	watching = true;
	// watch for changes in bout *.sass and *.scss files
	gulp.watch(['**/*.{sass,scss}'], ['sass']);
});

gulp.task('dist', function (callback) {
	compressCss = true;
	run('sass', callback);
});

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in sass-compilation recipe'));
	callback();
});

