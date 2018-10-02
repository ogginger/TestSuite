//TestSuite_test_AllPass_ResolvesTrue.js: Testing logic.

define([
	"TestSuite",
	"xGenerateTest",
	"xGenerateAsyncTest",
	"promise",
	"log"
], function(
	TestSuite,
	xGenerateTest,
	xGenerateAsyncTest,
	promise,
	log
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_AllPass_ResolvesTrue",
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
			],
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
