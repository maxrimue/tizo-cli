import util from 'util';
import test from 'ava';

const exec = util.promisify(require('child_process').exec);

test('return correct format', async t => {
	const {err, stdout, stderr} = await exec('node ./cli.js -f="utc" 12am pdt');
	t.is(err, undefined);
	t.true(stdout.includes('19:00'));
	t.is(stderr, '');
});

test('use standard format if not provided', async t => {
	const {err, stderr} = await exec('node ./cli.js 12am pdt');
	t.is(err, undefined);
	t.is(stderr, '');
});

test('throw error if format not found', async t => {
	const {err, stdout, stderr} = await exec(
		'node ./cli.js -f="idontexist" 12am pdt'
	);
	t.is(err, undefined);
	t.is(stdout, '');
	t.true(stderr.includes('Unknown format'));
});
