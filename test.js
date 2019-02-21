import {execSync} from 'child_process';
import test from 'ava';

test('return correct format', t => {
	const stdout = execSync('node ./cli.js -f="utc" 12am pdt');
	t.true(stdout.includes('07:00'));
});

test('use standard format if not provided', t => {
	const stdout = execSync('node ./cli.js 12am pdt');
	t.true(stdout.length === 6);
});

test('throw error if format not found', t => {
	const stdout = execSync('node ./cli.js -f="idontexist" 12am pdt').toString();
	t.true(stdout.includes('Unknown format'));
});
