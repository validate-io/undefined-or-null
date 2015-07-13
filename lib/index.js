'use strict';

/**
* FUNCTION: isUndefinedOrNull( value )
*	Validates if a value is undefined or null.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is undefined or null
*/
function isUndefinedOrNull( value ) {
	return ( value === void 0 || value === null );
} // end FUNCTION isUndefinedOrNull()


// EXPORTS //

module.exports = isUndefinedOrNull;
