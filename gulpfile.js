"use strict";

var exec = require('child_process').exec,
	fs = require('fs'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	multiline = require('multiline.js'),
	run = require('run-sequence'),
	slugify = require('slug'),
	yargs = require('yargs');

var files = {
	gitignore   : function () {
/*# gitignore for #{ slug }

*/
	},
	package_json: function () {
/*{
	"name": "#{ slug }",
	"description": "#{ name } recipe",
	"devDependencies": {
		"gulp": "^3.8.7",
		"gulp-util": "^3.0.0",
		"run-sequence": "^0.3.6"
	}
}

	 */
	},
	gulpfile_js : function () {
/*var gulp = require('gulp'),
	gutil = require('gulp-util'),
	run = require('run-sequence');

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default task running in #{ slug } recipe'));
	callback();
});

*/
	},
	readme_md   : function () {
/*# #{ name }

## Description

## Examples

## Modules & Packages

The links below are for additional documentation on the [npm](https://www.npmjs.org/) packages used in this recipe.

* [https://www.npmjs.org/package/gulp](https://www.npmjs.org/package/gulp)
* [https://www.npmjs.org/package/gulp-util](https://www.npmjs.org/package/gulp-util)
* [https://www.npmjs.org/package/run-sequence](https://www.npmjs.org/package/run-sequence)

*/
	}
};

gulp.task('recipe', function (callback) {
	var args = yargs.usage("Create a new gulp.js recipe from a standard template.\n\n" +
	'\tUsages:\n' +
	'\t\t$0 recipe --name="run nunit tests"\n' +
	'\t\t$0 recipe -n "run nunit tests"')
		.demand('name')
		.alias('name', 'n')
		.describe('name', "The name of the recipe. It will be 'slugified' so that 'My great recipe!' will turn into 'my-great-recipe'")
		.argv;

	var name = args.n,
		slug = slugify(args.n.toLowerCase()),
		replace = {
			name: name,
			slug: slug
		};

	if (fs.existsSync(slug)) {
		gutil.log(gutil.colors.red("Error: directory already exists"));
		process.exit();
	}
	fs.mkdirSync(slug);
	process.chdir(slug);
	fs.writeFileSync('.gitignore', multiline(files.gitignore, replace));
	fs.writeFileSync('package.json', multiline(files.package_json, replace));
	fs.writeFileSync('gulpfile.js', multiline(files.gulpfile_js, replace));
	fs.writeFileSync('README.md', multiline(files.readme_md, replace));

	var cp = exec('npm install', function(err){
		callback(err);
	});

	cp.stdout.pipe(process.stdout);
	cp.stderr.pipe(process.stderr);
});

gulp.task('default', function (callback) {
	gutil.log(gutil.colors.blue('Default Task.'));
	callback();
});

