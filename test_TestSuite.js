//test_TestSuite.js: Testing Logic.

define([
  "TestSuite_stable",
  "Functions/log",
  "tests/TestSuite_add_SimpleTest_AddsTestToTestCollection",
	"tests/TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection"
], function(
  TestSuite_stable,
  log,
  TestSuite_add_SimpleTest_AddsTestToTestCollection,
	TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection
) {
  return TestSuite_stable.extend({
    "initialize": function() {
      log("test_TestSuite initialized successfully!");
      var xTestSuite = this;

	/*//Add
	xTestSuite.add( TestSuite_add_SimpleTest_AddsTestToTestCollection );
	xTestSuite.add( TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection );
	//*/

	///test
	
	//*/
	
	xTestSuite.test();
    }
  });
});
