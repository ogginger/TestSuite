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
	"bIsObjectEqual": "lib/is_object_equal.min",
	"log": "lib/log.min",
	"test": "Functions/test",
	"promise": "lib/promise.min",
	"xGenerateTest": "lib/generate_test.min",
	"xAddTest": "lib/add_test.min",
	"bTestAll": "lib/test_all.min",
	"xGenerateAsyncTest": "lib/generate_async_test.min",
	"bTestAllAsync": "lib/test_all_async.min",
	"async_every": "lib/async_every.min",
	"AsyncIterator": "lib/async_iterator.min",
	"AsyncValidate": "lib/AsyncValidate",
	"validate": "lib/validate.min"
    },
    exclude: [	
	"jquery"
    ],
    name: "TestSuite",
    out: "testsuite.min.js"
})
