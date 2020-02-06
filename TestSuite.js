//TestSuite.js: Data logic for a javascript method testing framework.

define([
	"backbone",
	"add",
	"test",
	"xGenerateTest",
	"xAddTest",
	"bTestAll",
	"xGenerateAsyncTest",
	"bTestAllAsync",
	"xAddTests"
], function(
	backbone,
	add,
	test,
	xGenerateTest,
	xAddTest,
	bTestAll,
	xGenerateAsyncTest,
	bTestAllAsync,
	xAddTests
) {
  return backbone.Model.extend({

    //Members
    "defaults": function() {
	return {
		"MethodUnderTest": null,
		"TestCollection": [],
		"AsyncTestCollection": [],
		"Debug": true
    	};
    },

    //Methods		
    "xAddTest": xAddTest, 
    "xGenerateTest": xGenerateTest,
    "bTestAll": bTestAll,
    "xGenerateAsyncTest": xGenerateAsyncTest,
    "bTestAllAsync": bTestAllAsync,
    "add": add,
    "test": test,
	"xAddTests": xAddTests
  });
});   
