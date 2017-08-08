const commander = require('commander');
const chalk = require('chalk');
const shell = require('shelljs');

exports.start = function () {
	console.log(chalk.green('=== Catoo ==='));
	console.log(chalk.green('by ctl , 2017'));
	console.log(chalk.green('Visit our repo @ https://github.com/ctl/catoo'));
	commander
.version('1.0.0')
.option('-n, --new [name]', 'Create new Catoolin project')
.option('-s, --server', 'Serve your Catoolin app')
.parse(process.argv);

	if (!shell.which('git')) {
		shell.echo(chalk.red('ERROR:Sorry, Catoo requires git'));
		shell.exit(1);
	}
	if (!shell.which('php')) {
		shell.echo(chalk.red('ERROR:Sorry, Catoo requires php'));
		shell.exit(1);
	}
	if (commander.new) {
		if (commander.new === true) {
			console.log(chalk.red('ERROR:Please specify app name'));
		}	else if (shell.exec('ls ' + commander.new).code === 0) {
			console.log(chalk.red('ERROR:Sorry, that folder is exist'));
		}	else {
			shell.exec('git clone https://github.com/eazy-english/catoolin ' + commander.new);
			console.log(chalk.green('SUCCESS:Your Catoolin app is ready!'));
		}
	} else if (commander.server) {
		shell.exec('php -S localhost:8000');
	} else {
		console.log(chalk.red('ERROR:Please specify command'));
	}
};
