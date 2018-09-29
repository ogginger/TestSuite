//TestSuite_add.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	var xTestSuite = this;
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
	return xTestSuite;
  };
});
