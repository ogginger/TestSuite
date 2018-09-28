//TestSuite_add.js: Functional Logic.

define([], function() {
  return function( Input ) {
	var xTestSuite = this;
	xTestSuite.xAddTest({
		"Test": xTestSuite.xGenerateTest( Input ),
		"Collection": xTestSuite.get( "TestCollection" )
	});
	return xTestSuite;
  };
});
