//TestSuite_add.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	var xTestSuite = this;
	if (Array.isArray( Input )) {
		xTestSuite.xAddTests( Input );	
	} else if ( 
		typeof Input == "object" &&
		_.has( Input, "Name" ) &&
		_.has( Input, "Input" ) &&
		_.has( Input, "Function" ) &&
		_.has( Input, "ExpectedOutput" )
	) {
		if ( 
			_.has( Input, "Async" ) && 
			Input.Async === true 
		) {
			xTestSuite.xAddTest({
				"Test": xTestSuite.xGenerateAsyncTest( Input ),
				"Collection": xTestSuite.get("AsyncTestCollection")
			});
		} else {
			xTestSuite.xAddTest({
				"Test": xTestSuite.xGenerateTest( Input ),
				"Collection": xTestSuite.get( "TestCollection" )
			});
		}
	} else {
		throw { message: "TestSuite.add - Error: Input is incorrectly formatted." };
	} 
	return xTestSuite;
  };
});
