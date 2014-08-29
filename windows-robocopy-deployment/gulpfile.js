var exec = require('child_process').exec,
	gulp = require('gulp'),
	gutil = require('gulp-util');

var src = '.\\src',
	dest = '.\\dest';

// Windows only so die here if not running on Windows
var isWin = /^win/.test(process.platform);
if (!isWin) {
	console.log(gutil.colors.red('This recipe will only run under Microsoft Windows with the Robocopy command.'));
	process.exit();
};

gulp.task('robocopy', function(callback) {
	/*
		For more information on the robocopy command switches see this documentation:
		http://technet.microsoft.com/en-us/library/cc733145.aspx
	*/
	var command = [
			'robocopy /E /PURGE',
			src,
			dest,
			'/XF ".gitignore"',
		].join(" ");

	console.log(command);

	var cp = exec(command, function(err) {
		if (err && err.code >= 8) {
			console.log('ERROR:', err.code);
			throw new Error('Robocopy deployment failed');
		} else {
			gutil.log(gutil.colors.green('deployment complete'));
			callback();
		}
	});

	cp.stdout.pipe(process.stdout);
	cp.stderr.pipe(process.stderr);
});

gulp.task('default', function(callback) {
	gutil.log(gutil.colors.yellow('Default task running in windows-robocopy-deployment recipe'));
	callback();
});