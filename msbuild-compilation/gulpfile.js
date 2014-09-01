var del = require('del').sync,
	exec = require('child_process').exec,
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	msbuild = require('gulp-msbuild'),
	run = require('run-sequence');

var solutionFile = "ExampleMVCApp.sln",
	configuration = 'Release',
	targets = ['Clean', 'Build'],
	deployDest = "deploy";

/*
	Detailed information on properties available for MSBuild can be found in the following links:
		http://msdn.microsoft.com/en-us/library/ms164311.aspx (Command line reference)
		http://msdn.microsoft.com/en-us/library/dd393574.aspx (MSBUild reference guide)
*/
gulp.task('msbuild', function () {
	return gulp.src(solutionFile)
		.pipe(msbuild({
			configuration: configuration,
			targets     : targets,
			toolsVersion: 4.0,
			stdout      : true,
			errorOnFail : true,
			verbosity   : 'minimal',
			maxBuffer   : 2048 * 1024, // 2MB
			properties  : {
				PrecompileBeforePublish                       : false,
				DeployOnBuild                                 : true,
				AutoParameterizationWebConfigConnectionStrings: false
			}
		}));
});

gulp.task('clean', function () {
	del([
		'deploy/**/*',
		'!.gitignore'
	]);

	return gulp.src(solutionFile)
		.pipe(msbuild({
			configuration: configuration,
			targets     : ["Clean"],
			toolsVersion: 4.0,
			stdout      : true,
			errorOnFail : true,
			verbosity   : 'minimal',
			maxBuffer   : 2048 * 1024 // 2MB
		}));
});

gulp.task('deploy', function (callback) {
	/*
		For more information on the robocopy command switches see this documentation:
		http://technet.microsoft.com/en-us/library/cc733145.aspx
	*/
	var command = [
			'robocopy /MIR', //
			'"ExampleMVCApp/obj/' + configuration + '/Package/PackageTmp/"',
			deployDest,
			'/XF ".gitignore"',
		].join(" ");

	var cp = exec(command , function (err) {
		if (err && err.code >= 8) {
			gutil.log(gutil.colors.red('ERROR:', err.code, err.message));
			throw new Error('Robocopy deployment failed');
		} else {
			gutil.log(gutil.colors.green('deployment complete'));
			callback();
		}
	});
});

gulp.task('full-build', function (callback) {
	run('clean', 'msbuild', 'deploy', callback);
});

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in msbuild-compilation recipe'));
	callback();
});

