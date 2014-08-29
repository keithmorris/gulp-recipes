# Windows Robocopy Deployment

## Description

This recipe demonstrates executing the Microsoft Windows `robocopy` command in a child process.

## Examples

### robocopy task

`gulp robocopy`

This command will copy all files from the `src` directory to the `dest` directory. It also demonstrates the `/XF` flag for excluding certain files (in this case, the `.gitignore` file so that it does not remove that file in the `dest` directory.)

## Modules & Packages

The links below are for additional documentation on the [npm](https://www.npmjs.org/) packages used in this recipe.

* [https://www.npmjs.org/package/gulp](https://www.npmjs.org/package/gulp)
* [https://www.npmjs.org/package/gulp-util](https://www.npmjs.org/package/gulp-util)

