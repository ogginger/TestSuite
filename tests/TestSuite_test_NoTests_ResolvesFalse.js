//TestSuite_test_NoTests_ResovlesFalse.js: Testing logic.

define([
	"TestSuite",
	"promise"
], function(
	TestSuite,
	promise
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_NoTests_ResovlesFalse",
		"Input": new TestSuite(),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.test().then(function( Result ) {
					resolve( Result );
				});
			});
		},
		"ExpectedOutput": false
	};
});
