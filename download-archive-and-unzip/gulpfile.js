var download = require('gulp-download'),
	fs = require('fs.extra'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	uuid = require('uuid').v4,
	unzip = require('adm-zip');

gulp.task('download', [], function (callback) {
	var tempPath = 'temp-' + uuid();
	download('https://slideshow.googlecode.com/files/Slideshow-1.3.2.110508.zip')
		.pipe(gulp.dest(tempPath))
		.on('end', function () {
			var files = unzip(tempPath + '/Slideshow-1.3.2.110508.zip');
			files.extractAllTo('dest/', true);
			fs.rmrfSync(tempPath);
			callback();
		});
});

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in download-archive-and-unzip recipe'));
	callback();
});

