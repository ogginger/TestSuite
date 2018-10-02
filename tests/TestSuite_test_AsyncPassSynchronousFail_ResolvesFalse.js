//TestSuite_test_AsyncPassSynchronousFail_ResolvesFalse.js: Testing logic.

define([
	"TestSuite",
	"promise",
	"xGenerateTest",
	"xGenerateAsyncTest"
], function(
	TestSuite,
	promise,
	xGenerateTest,
	xGenerateAsyncTest
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_AsyncPassSynchronousFail_ResolvesFalse",
		"Input": new TestSuite({
			"AsyncTestCollection": [
				xGenerateAsyncTest({
					"Async": true,
					"Name": "AsyncTest",
					"Input": undefined,
					"Function": function() {
						return promise(function( resolve ) {
							resolve( true );
						});
					},
					"ExpectedOutput": true
				})
			],
			"TestCollection": [
				xGenerateTest({
					"Name": "FailingTest",
					"Input": undefined,
					"Function": function() {
						return false;
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
		"ExpectedOutput": false,
		"Comparator": {
			"Debug": false
		}
	};
});
