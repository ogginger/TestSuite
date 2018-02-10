//build.js: Configuration file for optimizing the TestSuite Object. 
/*
*/ 
({
    baseUrl: ".",
    paths: {
	"rsvp": "lib/rsvp",
	"backbone": "lib/backbone",
	"underscore": "lib/underscore",
	"jquery": "lib/jquery",
	"bIsObjectEqual": "Functions/bIsObjectEqual",
	"log": "Functions/log"
    },
    exclude: [ "rsvp", "backbone", "underscore", "jquery" ],
    name: "TestSuite",
    out: "testsuite.min.js"
})
