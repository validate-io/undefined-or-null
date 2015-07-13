undefined-or-null
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is undefined or null.


## Installation

``` bash
$ npm install validate.io-undefined-or-null
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isUndefinedOrNull = require( 'validate.io-undefined-or-null' );
```

#### isUndefinedOrNull( value )

Validates if a `value` is `undefined` or `null`.

``` javascript
var value = null;

var bool = isUndefinedOrNull( value );
// returns true
```


## Examples

``` javascript
var isUndefinedOrNull = require( 'validate.io-undefined-or-null' );

console.log( isUndefinedOrNull( undefined ) );
// returns true

console.log( isUndefinedOrNull( void 0 ) );
// returns true

console.log( isUndefinedOrNull( null ) );
// returns true

console.log( isUndefinedOrNull( false ) );
// returns false

console.log( isUndefinedOrNull( {} ) );
// returns false

console.log( isUndefinedOrNull( '' ) );
// returns false

console.log( isUndefinedOrNull( 0 ) );
// returns false

console.log( isUndefinedOrNull( [] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-undefined-or-null.svg
[npm-url]: https://npmjs.org/package/validate.io-undefined-or-null

[travis-image]: http://img.shields.io/travis/validate-io/undefined-or-null/master.svg
[travis-url]: https://travis-ci.org/validate-io/undefined-or-null

[coveralls-image]: https://img.shields.io/coveralls/validate-io/undefined-or-null/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/undefined-or-null?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/undefined-or-null.svg
[dependencies-url]: https://david-dm.org/validate-io/undefined-or-null

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/undefined-or-null.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/undefined-or-null

[github-issues-image]: http://img.shields.io/github/issues/validate-io/undefined-or-null.svg
[github-issues-url]: https://github.com/validate-io/undefined-or-null/issues
