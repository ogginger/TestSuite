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
		"Input": { 
			"Object": new TestSuite({ "MethodUnderTest": "AsyncTest" }),
			"Options": {
				"Async": true,
				"Name": "AsyncTest",
				"Input": undefined,
				"Function": function() {
					return promise(function( resolve ) {
						resolve( true );
					});
				},
				"ExpectedOutput": true
			}
		},
		"Function": function( Input ) {
			return Input.Object.add( Input.Options );
		},
		"ExpectedOutput": {"MethodUnderTest":"AsyncTest","TestCollection":[],"AsyncTestCollection":[{"Name":"AsyncTest"}],"Debug":true},
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
