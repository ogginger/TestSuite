//TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection.js: Testing logic.

define([
	"TestSuite",
	"xGenerateAsyncTest",
	"promise"
], function(
	TestSuite,
	xGenerateAsyncTest,
	promise
) {
	return {
		"Name":"TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection",
		"Input": new TestSuite(),
		"Function": function( Input ) {
			Input.add( xGenerateAsyncTest({
				"Async": true,
				"Name": "AsyncTest",
				"Input": undefined,
				"Function": function() {
					return promise(function( resolve ) {
						resolve( true );
					});
				},
				"ExpectedOutput": true
			}));	
		},
		"ExpectedOutput": {},
		"Comparator": {
			"Debug": true,
			"Object": true
		}
	};
});
