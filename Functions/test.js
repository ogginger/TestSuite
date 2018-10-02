//test.js: Functional Logic.

define([
	"promise",
	"underscore",
	"log"
], function(
	promise,
	_,
	log
) {
  return function( Input ) {
	var xTestSuite = this;
	return promise(function( resolve ) {
		if ( 
			_.isEmpty( 
				xTestSuite.get("AsyncTestCollection") 
			) === false 
		) {
		//if the async test collection isn't empty then...
			//Run all the asynchronous tests.
			xTestSuite.bTestAllAsync( xTestSuite.get("AsyncTestCollection") ).then(function( AsyncResult ) {
				if ( 
					_.isEmpty( 
						xTestSuite.get("TestCollection")
					) === false 
				) {
				//if the test collection isn't empty then...
					//Run all the synchronous tests.
					var SynchronousResult = xTestSuite.bTestAll( xTestSuite.get("TestCollection") );
						if ( 
							AsyncResult === true &&
							SynchronousResult === true
						) {
						//if both the synchronous result and the asynchronous result are true then...
							resolve( true );
						} else {
						//otherwise both the async result and the synchronous result are not both true so...
							resolve( false );
						}
					} else {
				//otherwise there are no synchronous tests so...
					resolve( AsyncResult )
				}
			});	
		} else if (
			_.isEmpty( 
				xTestSuite.get("TestCollection" )
			)  === false
		) {
		//otherwise the async test collection is empty so...
		//if the synchronous test collection isn't empty then...
			//Run all the synchronous tests.
			resolve(xTestSuite.bTestAll( xTestSuite.get("TestCollection") ));
		} else {
			log("Error: There are no tests to test.");
			resolve( false );
		}
	});
  };
});
