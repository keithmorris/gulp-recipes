# less-compilation recipe

## Description

The gulpfile.js has a couple of global variables that are uses within the less tasks to determine if the resultant CSS needs to be compressed and if the current task is a `watch` task. If it is a `watch` task, the `less` task does not throw errors but rather just logs errors. The `less` task also will not return the stream as that will cause the task to fail if there is a less compilation error. 

## Examples

The gulpfile.js has three examples that are used to demonstrate less compilation.

### less task

`gulp less`

This task simply compiles the `less/styles.less` file to `css/styles.css`. It uses the `watched` and `compressCss` variables (which are modified by other tasks) to determine some of it's behavior.

### watch task

`gulp watch`

Starts a watch process to watch `**.*.less` files and causes the main `styles.less` file to compile if any of the `.less` files are changed.

### dist task

`gulp dist`

This task emulates an automated task that would run as part of a distribution or deployment task. It sets the `compressCss` variable to true and then runs the `less` task causing it to create a compressed version of the styles.css.

## Modules & Packages

The links below are for additional documentation on the [npm](https://www.npmjs.org/) packages used in this recipe.

* [https://www.npmjs.org/package/gulp](https://www.npmjs.org/package/gulp)
* [https://www.npmjs.org/package/gulp-util](https://www.npmjs.org/package/gulp-util)
* [https://www.npmjs.org/package/run-sequence](https://www.npmjs.org/package/run-sequence)
* [https://www.npmjs.org/package/gulp-less](https://www.npmjs.org/package/gulp-less)