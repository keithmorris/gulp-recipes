# Gulp.js Recipes

This repository is intended to collect and share various [Gulp.js](http://gulpjs.com) recipes, tasks, approaches, etc.

## Getting Started

If all your are looking for is some gulp recipes, please explore the different subdirectories to find a `GulpJS` recipe that suites your needs. Each subdirectory is a complete gulp recipe with working examples. Go into the subdirectory of the recipe in which you are interested and run the `npm install` command to and then run the example tasks.

## Contributing

The `gulp-recipes` repository is set up as a gulp project itself. After you clone the repository, in the root directory you need to run the `npm install` command to install the dependencies and prepare to create your own recipe.

For some quick info on usage, just run the `gulp` command with no arguments (the `default` task).

To create your own recipe, create a new `git` branch and then execute the following command to create a new boilerplate recipe:

```
gulp recipe -n "Example Recipe"
```

This will get shortened to a new directory called `example-recipe` which will have the following files:

* `.gitignore` (empty)
* `package.json`
* `gulpfile.js`
* `README.md`

The boilerplate is setup with some starter node modules: `gulp` `gulp-util` and `run-sequence`. Once your recipe is complete, please submit a pull request and I will review and merge.

**Note:** Ideally the recipe should have a working example with sample files that the end user can run to demonstrate. Obviously, file paths can be examples (e.g. `/local/path/to/myfile.js`). Where it makes sense, I may merge in recipes that don't have working examples (becaues of the difficulty in creating a local example). Otherwise, please provide a working example.
