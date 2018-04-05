//test_TestSuite.js: Testing Logic.

define([
  "TestSuite_stable",
  "Functions/log",
  "tests/xGenerateTest_SimplePassingTest_ReturnsPassingTest"
], function(
  TestSuite_stable,
  log,
  xGenerateTest_SimplePassingTest_ReturnsPassingTest
) {
  return TestSuite_stable.extend({
    "initialize": function() {
      log("test_TestSuite initialized successfully!");
      var xTestSuite = this;

	xTestSuite.add( xGenerateTest_SimplePassingTest_ReturnsPassingTest );

	xTestSuite.bTestAll();
    }
  });
});
