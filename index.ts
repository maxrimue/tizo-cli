#!/usr/bin/env node
'use strict';
import tizo from 'tizo';
import chalk from 'chalk';

function format(tizoTime: [number, number]): string {
	let hours = String(tizoTime[0]);
	if (hours.length === 1) {
		hours = '0' + hours;
	}

	let minutes = String(tizoTime[1]);
	if (minutes.length === 1) {
		minutes = '0' + minutes;
	}

	return `${hours}:${minutes}`;
}

const log = console.log;
const argv = process.argv.splice(2).join(' ');
if (argv.length === 0) {
	console.error('No input supplied');
	process.exit(1);
}

try {
	var tizoResult = tizo(argv);
} catch (error) {
	console.error(error.message);
	process.exit(1);
}
const {original, local, utc, inputTimezone} = tizoResult;

log();
log(
	` ${chalk.blue('original')}   ${format(original)} ${inputTimezone.name ||
		'Local Time'}`
);
log(`    ${chalk.blue('local')}   ${format(local)}`);
log(`      ${chalk.blue('utc')}   ${format(utc)}`);
