//test_TestSuite.js: Testing Logic.

define([
  "TestSuite_stable",
  "Functions/log"
], function(
  TestSuite_stable,
  log
) {
  return TestSuite_stable.extend({
    "initialize": function() {
      log("test_TestSuite initialized successfully!");
      var xTestSuite = this;


      xTestSuite.test();
    }
  });
});
