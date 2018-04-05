//TestSuite.xGenerateTest_SimpleTest_ReturnsTest.js: Testing logic.

define([
	"TestSuite",
	"Functions/log"
], function(
	TestSuite,
	log
) {
	return {
		"Name":"TestSuite.xGenerateTest_SimplePassingTest_ReturnsPassingTest",
		"Input": function() {
			return {
				"Object": new TestSuite(),
				"Options": {
					"Name": "SimplePassingTest_NoInput_ReturnsTrue",
					"Input": undefined,
					"Function": function( Input ) {
						return true;
					},
					"ExpectedOutput": true
				} 
			};
		},
		"Function": function( Input ) {
			log( "Inside Test!" );
			return Input.Object.xGenerateTest( Input.Options );
		},
		"ExpectedOutput": true,
		"ComparisonFunction": function( Test, Expected ) {
			var TestResult = Test();
			var ComparisonResult = false;
			var bDebug = true;

			log( "Result: " + TestResult, bDebug );
			log( "Expected: " + Expected, bDebug );

			if ( TestResult === Expected ) {
				ComparisonResult = true;
			}

			return ComparisonResult;
		}
	};
});
