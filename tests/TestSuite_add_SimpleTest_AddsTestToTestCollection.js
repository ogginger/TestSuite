//TestSuite_add_SimpleTest_AddsTestToTestCollection.js: Testing logic.

define([
	"TestSuite",
	"bIsObjectEqual",
	"log"
], function(
	TestSuite,
	bIsObjectEqual,
	log
) {
	return {
		"Name":"TestSuite_add_SimpleTest_AddsTestToTestCollection",
		"Input": function() {
			return {
				"Model": new TestSuite(),
				"Input": {
					"Name": "SimpleTest",
					"Input": undefined,
					"Function": function( Input ) {
						return true;
					},
					"ExpectedOutput": true
				}
			};
		},
		"Function": function( Input ) {
			return Input.Model.add( Input.Input );
		},
		"ExpectedOutput": [{ "Name": "SimpleTest" }],
		"Comparator": {
			"Object": true,
			"Debug": true
		},
		"ComparisonFunction": function( Result, Expected ) {
			return bIsObjectEqual({
				"Comparator": Result.get("TestCollection"),
				"Comparand": Expected
			});
		}
	};
});
