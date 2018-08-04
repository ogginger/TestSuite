//TestSuite.js: Data logic for a javascript method testing framework.

define([
	"jquery",
	"underscore",
	"backbone",
	"rsvp",
	"Functions/bIsObjectEqual",
	"Functions/log",
	"xGenerateTest",
	"xAddTest",
	"bTestAll"
], function(
	$,
	_,
	backbone,
	rsvp,
	bIsObjectEqual,
	log,
	xGenerateTest,
	xAddTest,
	bTestAll
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
    "bTestAll": bTestAll
		
  });
});   
