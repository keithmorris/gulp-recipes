# MSBuild Compilation

## Description

This recipe shows an example of building a Microsoft .Net MVC4 application using the `MSBuild` command. The solutions is also setup to download NuGet any packages that are not locally available on build so the NuGet packages are not kept in source control.

There are also a couple of utility gulp tasks that demonstrate some common tasks that may be used in conjunction with the build task.

## Examples

### msbuild task

`gulp msbuild`

This task runs the `MSBuild` on the example solution file using the `Release` configuration and the `Clean;Build` targets. It is also setup with the `DeployOnBuild` property to package the build for deployment.

### clean task

`gulp clean`

This task runs a basic `MSBuild` on the example solution with the `Clean` target. The task also deletes any existing files previously deployed with the `deploy` task from the deploy destination.

### deploy task

`gulp deploy`

This task uses `robocopy` to copy the packaged files from the `msbuild` task to the deploy destination.

### full-build task

`gulp full-build`

This is a meta-task that run the `clean`, `msbuild` and `deploy` gulp tasks in sequence.


## Modules & Packages

The links below are for additional documentation on the [npm](https://www.npmjs.org/) packages used in this recipe.

* [https://www.npmjs.org/package/gulp](https://www.npmjs.org/package/gulp)
* [https://www.npmjs.org/package/gulp-util](https://www.npmjs.org/package/gulp-util)
* [https://www.npmjs.org/package/gulp-msbuild](https://www.npmjs.org/package/gulp-msbuild)
* [https://www.npmjs.org/package/del](https://www.npmjs.org/package/del)
* [https://www.npmjs.org/package/run-sequence](https://www.npmjs.org/package/run-sequence)
