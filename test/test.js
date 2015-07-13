/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isUndefinedOrNull = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-undefined-or-null', function tests() {

	it( 'should export a function', function test() {
		expect( isUndefinedOrNull ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			undefined,
			null,
			void 0
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isUndefinedOrNull( values[ i ] ), values[ i ] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			'',
			0,
			false,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isUndefinedOrNull( values[ i ] ), values[ i ] );
		}
	});

});
