#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tizoCli = require('.');

const cli = meow(
	`
	Usage
	  $ tizo [input]

	Options
	  --format, -f  'local', 'utc', 'original' [Default: 'local']

	Examples
	  $ tizo 12pm
	  24:00
	  $ tizo --format=utc 12:21 cest
	  10:21 UTC
`,
	{
		flags: {
			format: {
				type: 'string',
				alias: 'f',
				default: 'local',
			},
		},
	}
);

tizoCli(cli);
