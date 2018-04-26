'use strict';
const tizo = require('tizo');

function print([hours, minutes]) {
	let formattedHours = hours;
	if (hours < 10) {
		formattedHours = String('0' + hours);
	}

	let formattedMinutes = minutes;
	if (minutes < 10) {
		formattedMinutes = String('0' + minutes);
	}

	console.log(`${formattedHours}:${formattedMinutes}`);
}

module.exports = ({flags, input}) => {
	const date = tizo(input.join(' '));
	switch (flags.format) {
		case 'local':
			print(date.local);
			break;
		case 'utc':
			print(date.utc);
			break;
		case 'original':
			print(date.original);
			break;
		default:
			console.error('Unknown format');
	}
};
