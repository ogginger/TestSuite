//TestSuite_test_AsyncFailSynchronousPass_ResolvesFalse.js: Testing logic.

define([
	"TestSuite",
	"promise",
	"xGenerateAsyncTest",
	"xGenerateTest"
], function(
	TestSuite,
	promise,
	xGenerateAsyncTest,
	xGenerateTest
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_AsyncFailSynchronousPass_ResolvesFalse",
		"Input": new TestSuite({
			"AsyncTestCollection": [
				xGenerateAsyncTest({
					"Async": true,
					"Name": "FailingAsyncTest",
					"Input": undefined,
					"Function": function( resolve ) {
						return promise(function( resolve ) {
							resolve(false);
						});
					},
					"ExpectedOutput": true
				})
			],
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
		"ExpectedOutput": false
	};
});
