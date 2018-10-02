//AsyncValidate.js: Functional Logic.

define([
//	"promise",
//	"validate"
], function(
//	promise,
//	validate
) {
  return function( Input ) {
	/*
	return promise(function( resolve, reject ) {
		var bThrewError = false;
		var xError = undefined;
		try {
			validate( Input );
		} catch( Error ) {
			bThrewError = true;
			xError = Error;
		} finally {
			if ( bThrewError ) {
				reject( xError );
			} else {
				resolve( true );
			}
		}
	});
	//*/
  };
});
