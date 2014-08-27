# sass-compilation recipe

## Description

The gulpfile.js has a couple of global variables that are used within the `sass` tasks to determine if the resultant CSS needs to be compressed and if the current task is a `watch` task. If it is a `watch` task, the `sass` task does not throw errors but rather just logs errors. The `sass` task also will not return the stream as that will cause the task to fail if there is a sass compilation error. 

## Examples

The gulpfile.js has three examples that are used to demonstrate sass compilation.

### sass task

`gulp sass`

This task simply compiles the `sass/styles.scss` file to `css/styles.css`. It uses the `watched` and `outputStyle` variables which are set at the top of the gulpfile and are modified by other tasks to determine some of it's behavior.

### watch task

`gulp watch`

Starts a watch process to watch `**.*.sass` files and causes the main `styles.sass` file to compile if any of the `.sass` files are changed.

### dist task

`gulp dist`

This task emulates an automated task that would run as part of a distribution or deployment task. It sets the `outputStyle` variable to true and then runs the `sass` task causing it to create a compressed version of the styles.css.

## Modules & Packages

The links below are for additional documentation on the [npm](https://www.npmjs.org/) packages used in this recipe.

* [https://www.npmjs.org/package/gulp](https://www.npmjs.org/package/gulp)
* [https://www.npmjs.org/package/gulp-util](https://www.npmjs.org/package/gulp-util)
* [https://www.npmjs.org/package/run-sequence](https://www.npmjs.org/package/run-sequence)
* [https://www.npmjs.org/package/gulp-sass](https://www.npmjs.org/package/gulp-sass)

