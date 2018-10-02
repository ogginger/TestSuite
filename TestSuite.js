//TestSuite.js: Data logic for a javascript method testing framework.

define([
	"jquery",
	"underscore",
	"backbone",
	"rsvp",
	"bIsObjectEqual",
	"log",
	"Functions/add",
	"Functions/test",
	"xGenerateTest",
	"xAddTest",
	"bTestAll",
	"xGenerateAsyncTest",
	"bTestAllAsync"
], function(
	$,
	_,
	backbone,
	rsvp,
	bIsObjectEqual,
	log,
	add,
	test,
	xGenerateTest,
	xAddTest,
	bTestAll,
	xGenerateAsyncTest,
	bTestAllAsync
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
    "test": test
		
  });
});   
