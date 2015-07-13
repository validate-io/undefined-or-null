'use strict';

var isUndefinedOrNull = require( './../lib' );

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
