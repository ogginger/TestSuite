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
	log( "test_" + xTestSuite.get("MethodUnderTest") + ": Running tests...");
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
							log("All of the tests passed!");
							resolve( true );
						} else {
						//otherwise both the async result and the synchronous result are not both true so...
							log("All of the tests did not pass!");
							resolve( false );
						}
					} else {
				//otherwise there are no synchronous tests so...
					if ( AsyncResult ) {
						log("All of the asynchronous tests passed!");
					} else {
						log("All of the asynchronous tests did not pass!");
					}
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
			var bAllTestsPassed = xTestSuite.bTestAll( xTestSuite.get("TestCollection") ));
			if ( bAllTestsPassed ) {				
				log("All of the synchronous tests passed!");
			} else {
				log("All of the synchronous tests did not pass!");
			}

			resolve( bAllTestsPassed );
		} else {
			log("Error: There are no tests to test!");
			resolve( false );
		}
	});
  };
});
