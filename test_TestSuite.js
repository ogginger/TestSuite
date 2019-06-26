//test_TestSuite.js: Testing Logic.

define([
  "TestSuite_stable",
  "log",
  "tests/TestSuite_add_SimpleTest_AddsTestToTestCollection",
	"tests/TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection",
	"tests/TestSuite_test_AllPass_ResolvesTrue",
	"tests/TestSuite_test_AsyncPassNoSynchronousTests_ResolvesTrue",
	"tests/TestSuite_test_NoAsyncTestsSynchronousPass_ResolvesTrue",
	"tests/TestSuite_test_AsyncPassSynchronousFail_ResolvesFalse",
	"tests/TestSuite_test_NoTests_ResolvesFalse",
	"tests/TestSuite_test_AsyncRejects_ResolvesFalse"
], function(
  TestSuite_stable,
  log,
  TestSuite_add_SimpleTest_AddsTestToTestCollection,
	TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection,
	TestSuite_test_AllPass_ResolvesTrue,
	TestSuite_test_AsyncPassNoSynchronousTests_ResolvesTrue,
	TestSuite_test_NoAsyncTestsSynchronousPass_ResolvesTrue,
	TestSuite_test_AsyncPassSynchronousFail_ResolvesFalse,
	TestSuite_test_NoTests_ResolvesFalse,
	TestSuite_test_AsyncRejects_ResolvesFalse
) {
  return TestSuite_stable.extend({
    "initialize": function() {
      log("test_TestSuite initialized successfully!");
      var xTestSuite = this;
	xTestSuite.set("MethodUnderTest", "TestSuite");
	/*//Add
	xTestSuite.add( TestSuite_add_SimpleTest_AddsTestToTestCollection );
	xTestSuite.add( TestSuite_add_AsyncTest_AddsAsyncTestToAsyncTestCollection );
	//*/

	//*test
	//xTestSuite.add( TestSuite_test_AllPass_ResolvesTrue );
	//xTestSuite.add( TestSuite_test_AsyncPassNoSynchronousTests_ResolvesTrue );
	//xTestSuite.add( TestSuite_test_NoAsyncTestsSynchronousPass_ResolvesTrue );
	//xTestSuite.add( TestSuite_test_AsyncPassSynchronousFail_ResolvesFalse );
	//xTestSuite.add( TestSuite_test_NoTests_ResolvesFalse );
	xTestSuite.add( TestSuite_test_AsyncRejects_ResolvesFalse );
	//*/
	
	xTestSuite.test();
    }
  });
});
