//build.js: Configuration file for optimizing the TestSuite Object. 
/*
*/ 
({
    baseUrl: ".",
    paths: {
	"jquery": "empty:",
	"underscore": "lib/underscore.min",
	"backbone": "lib/backbone.min",
	"add": "Functions/add",
	"test": "Functions/test",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"log": "lib/log.min",
	"xGenerateTest": "lib/generate_test.min",
	"xAddTest": "lib/add_test.min",
	"bTestAll": "lib/test_all.min",
	"xGenerateAsyncTest": "lib/generate_async_test.min",
	"AsyncValidate": "lib/async_validate.min",
	"AsyncIterator": "lib/async_iterator.min",
	"async_every": "lib/async_every.min",
	"bTestAllAsync": "lib/test_all_async.min",
	"xAddTests": "lib/add_tests.min"
    },
    exclude: [
	"jquery"	
    ],
    name: "TestSuite",
    out: "testsuite.min.js"
})
