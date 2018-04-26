# tizo-cli [![Build Status](https://travis-ci.org/maxrimue/tizo-cli.svg?branch=master)](https://travis-ci.org/maxrimue/tizo-cli)

> tizo module for the cli

## Install

```
$ npm install tizo-cli
```

## Usage

```sh
$ tizo --format="utc" 12 am pdt
19:00

$ tizo --help

  tizo module for the cli

  Usage
    $ tizo [input]

  Options
    --format, -f  'local', 'utc', 'original' [Default: 'local']

  Examples
    $ tizo 12pm
    24:00
    $ tizo --format=utc 12:21 cest
    10:21 UTC
```

## Related

* [tizo](https://github.com/maxrimue/tizo) - Library of this module

## License

MIT © [maxrimue](https://github.com/maxrimue)
