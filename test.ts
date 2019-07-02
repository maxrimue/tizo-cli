import {execSync} from 'child_process';
import test from 'ava';

test('return correct formats', t => {
	const stdout = execSync('node ./out/index.js 12am pt');
	t.(
		stdout.toString(),
		`
 original   00:00 Pacific Time
    local   10:00
	  utc   08:00
	`
	);
});
