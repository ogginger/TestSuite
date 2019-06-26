//TestSuite_test_AsyncRejects_ResolvesFalse.js: Testing logic.

define([
	"TestSuite",
	"promise"
], function(
	TestSuite,
	promise
) {
	return {
		"Async": true,
		"Name":"TestSuite_test_AsyncRejects_ResolvesFalse",
		"Input": function() {
			return promise(function( resolve ) {
				var xTestSuite = new TestSuite({
					"MethodUnderTest": "SimpleAsync"
				});
				xTestSuite.add({
					"Async": true,
					"Name": "SimpleAsync_RejectsError",
					"Input": undefined,
					"Function": function() {
						return promise(function( resolve, reject ) {
							reject({ "Message": "Error" });
						});
					},
					"ExpectedOutput": { "Message": "Error" },
					"Comparator": { "Object": true }
				});
				resolve({
					"TestSuite": xTestSuite
				});
			});
		},
		"Function": function( Input ) {
			return promise(function( resolve ) {
				resolve( Input.test() );
			});
		},
		"ExpectedOutput": undefined,
		"Debug": true
	};
});
