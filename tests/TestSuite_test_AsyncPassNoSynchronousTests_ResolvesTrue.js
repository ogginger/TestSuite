//TestSuite_test_AsyncPassNoSynchronousTests_ResolvesTrue.js: Testing logic.

define([
	"TestSuite",
	"promise",
	"xGenerateAsyncTest"
], function(
	TestSuite,
	promise,
	xGenerateAsyncTest
) {
	return {
		"Async":true,
		"Name":"TestSuite_test_AsyncPassNoSynchronousTests_ResolvesTrue",
		"Input": new TestSuite({
			"AsyncTestCollection": [
				xGenerateAsyncTest({
					"Async": true,
					"Name": "AsyncTest",
					"Input": undefined,
					"Function": function() {
						return promise(function( resolve ) {
							resolve(true);
						});
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
		"ExpectedOutput": true
	};
});
