//TestSuite_test_NoAsyncSynchronousPass_ResolvesTrue.js: Testing logic.

define([
	"TestSuite",
	"xGenerateTest",
	"promise"
], function(
	TestSuite,
	xGenerateTest,
	promise
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_NoAsyncSynchronousPass_ResolvesTrue",
		"Input": new TestSuite({
			"TestCollection": [
				xGenerateTest({
					"Name": "SimpleTest",
					"Input": undefined,
					"Function": function() {
						return true;
					},
					"ExpectedOutput": true
				})
			]
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.test().then(function( Result ) {
					resolve( Result );
				});
			});
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
		
	};
});
