var scriptFilter = require('./utils/script-filter');
var tasks = require('fs').readdirSync('./gulp-lib/tasks').filter(scriptFilter);

tasks.forEach(function (task) {
	require('./tasks/' + task);
});
