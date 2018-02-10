//TestSuite.js: Data logic for a javascript method testing framework.

define([
  "jquery",
  "underscore",
  "backbone",
	"rsvp",
	"Functions/bIsObjectEqual",
	"Functions/log"
], function(
      $,
      _,
      backbone,
			rsvp,
			bIsObjectEqual,
			log
) {
  return backbone.Model.extend({
    "defaults": {
      "MethodUnderTest": null,
      "TestCollection": [],
			"AsyncTestCollection": [],
			"Debug": true
    },
		
		"xAddTest": function( Options ) {
			var xTest = this;
			xTest.get("TestCollection").push(
				xTest.xGenerateTest( Options )
			);
			return xTest;
		},
		
		"xAddAsyncTest": function( Options ) {
			var xTest = this;
			xTest.get("AsyncTestCollection").push(
				xTest.xGenerateAsyncTest( Options )
			);
			return xTest;
		},
		
		"xGenerateAsyncTest": function( Options ) {
			var xTestSuite = this;
			

			
			if (_.has( Options, "Name" ) === false) {
			//if Options does not have a name then...	
				throw { "message": "Test did not have a Name." };
			} else if (_.has( Options, "Input" ) === false) {
			//or if Options does not have an input then...	
				throw { "message": "Test did not have an Input." };
			} else if (_.has( Options, "Function" ) === false) {
			//or if Options does not have a function then...
				throw { "message": "Test did not have a Function." };
			} else if (_.has( Options, "ExpectedOutput" ) === false) {
			//or if Options does not have an expected output then...	
				throw { "message": "Test did not have an ExpectedOutput." };
			} else if (_.isFunction( Options.Function ) === false) {
			//or if Option's Function is not a function then...
				throw { "message": "Test Function was not a function." };
			}  else if (_.isString( Options.Name ) === false) {
			//or if Option's Name is not a string then...	
				throw { "message": "Test Name was not a string." };
			} else {
			//Otherwise Options is configured properly so...
				if (_.isFunction( Options.Input ) === true ) {
				//If there is a setup function then...
					//Run Input as a setup function.
					Options.Input = Options.Input();
				}
				
				var bComparisonFunction = false;
				if ( _.has( Options, "ComparisonFunction" ) === true ) {
				//If a comparison function has been given then use that as the test.
					if ( _.isFunction( Options.ComparisonFunction ) === true ) {
					//if the comparison function is a function then...	
						bComparisonFunction = true;
					} else {
					//otherwise the comparison function is not a function so...	
						throw { "message": "Test Comparison Function was not a function."};
					}
				}
				
				var bDebug = false;
				var bObject = false;
				
				if ( _.has( Options, "Comparator" ) ) {
					if ( typeof Options.Comparator !== "object" ) {
					//if the comparator is not an object then...
						throw { "message": "The Comparator was not an object." };
					}

					if ( Options.Comparator.Debug === true ) {
					//If the comparator's debug value is true then...
						bDebug = true;
					}
				
					if ( Options.Comparator.Object === true ) {
					//if the comparator's object value is true then...
						bObject = true;
					}
				}
				
				var xTest;
				var Expected = Options.ExpectedOutput;
				
				if ( bComparisonFunction === false ) {
				//if the ComparisonFunction is undefined then...
					//Create a typical test.
					xTest = function() {
						return new rsvp.Promise(function( resolve ) {
							Options.Function( Options.Input ).then(function( Result ) {
							
								var bTestResult = false;
								if ( bObject === true ) {
								//if the result and expected output are objects then...	
									log( "Result: " + JSON.stringify( Result ), bDebug );
									log( "Expected: " + JSON.stringify( Expected ), bDebug );
						
									if (
										bIsObjectEqual( Result, Expected ) === true
									) {
									//The the function result matched the expected output then...
										bTestResult = true;
									}
								} else {
								//otherwise the result and expected output are not objects.
									log( "Result: " + Result, bDebug );
									log( "Expected: " + Expected, bDebug );
									
							
									if ( Result === Expected ) {
									//The the function result matched the expected output then...
										bTestResult = true;
									}
								}
							
								if ( bTestResult === true ) {
								//if the test result was true then...
									resolve( true );
								} else {
								//otherwise the test result was not true so...
									log( "UnitTest: " + Options.Name + "() - Failed!" );
									resolve( false );
								}
							
							});
						});
					};
				} else { 
					xTest = function() {
						return new rsvp.Promise(function( resolve ) {
							Options.Function( Options.Input ).then(function( PromiseResult ) {
								Options.ComparisonFunction( PromiseResult, Options.ExpectedOutput ).then(function( ComparisonResult ) {
									resolve( ComparisonResult );
								});
							});
						});
					};
				}
				
				return xTest;
			}	
			
			
			
			
		},
    
    "xGenerateTest": function( Options ) {
			if (_.has( Options, "Name" ) === false) {
			//if Options does not have a name then...	
				throw { "message": "Test did not have a Name." };
			} else if (_.has( Options, "Input" ) === false) {
			//or if Options does not have an input then...	
				throw { "message": "Test did not have an Input." };
			} else if (_.has( Options, "Function" ) === false) {
			//or if Options does not have a function then...
				throw { "message": "Test did not have a Function." };
			} else if (_.has( Options, "ExpectedOutput" ) === false) {
			//or if Opions does not have an expected output then...	
				throw { "message": "Test did not have an ExpectedOutput." };
			} else if (_.isFunction( Options.Function ) === false) {
			//or if Option's Function is not a function then...
				throw { "message": "Test Function was not a function." };
			}  else if (_.isString( Options.Name ) === false) {
			//or if Option's Name is not a string then...	
				throw { "message": "Test Name was not a string." };
			} else {
			//Otherwise Options is configured properly so...
				if (_.isFunction( Options.Input ) === true ) {
				//If there is a setup function then...
					//Run Input as a setup function.
					Options.Input = Options.Input();
				}
				
				var bComparisonFunction = false;
				if ( _.has( Options, "ComparisonFunction" ) === true ) {
				//If a comparison function has been given then use that as the test.
					if ( _.isFunction( Options.ComparisonFunction ) === true ) {
					//if the comparison function is a function then...	
						bComparisonFunction = true;
					} else {
					//otherwise the comparison function is not a function so...	
						throw { "message": "Test Comparison Function was not a function."};
					}
				}
				
				var bDebug = false;
				var bObject = false;
				
				if ( _.has( Options, "Comparator" ) ) {
					if ( typeof Options.Comparator !== "object" ) {
					//if the comparator is not an object then...
						throw { "message": "The Comparator was not an object." };
					}

					if ( Options.Comparator.Debug === true ) {
					//If the comparator's debug value is true then...
						bDebug = true;
					}
				
					if ( Options.Comparator.Object === true ) {
					//if the comparator's object value is true then...
						bObject = true;
					}
				}
				
				var xTest;
				var Result = Options.Function( Options.Input );
				var Expected = Options.ExpectedOutput;
						
				if ( bComparisonFunction === false ) {
				//if the ComparisonFunction is undefined then...
					//Create a typical test.
					
					xTest = function() {
						var bTestResult = false;
						if ( bObject === true ) {
						//if the result and expected output are objects then...	
							log( "Result: " + JSON.stringify( Result ), bDebug );
							log( "Expected: " + JSON.stringify( Expected ), bDebug );
						
							if (
								bIsObjectEqual( Result, Expected ) === true
							) {
							//The the function result matched the expected output then...
								bTestResult = true;
							}
						} else {
						//otherwise the result and expected output are not objects.
							log( "Result: " + Result, bDebug );
							log( "Expected: " + Expected, bDebug );
							
							if ( Result === Expected ) {
							//The the function result matched the expected output then...
								bTestResult = true;
							}
						}
						
						if ( bTestResult === true ) {
						//if the test result was true then...
							return true;
						} else {
						//otherwise the test result was not true so...
							log( "UnitTest: " + Options.Name + "() - Failed!" );
							return false;
						}
					};
				} else {
				//Otherwise a comparison function was given so...
					xTest = function() {
						return Options.ComparisonFunction( Result, Expected );
					};
				}
				
				return xTest;
			}
    },
		
		"bTestAllAsync": function() {
			var xTestSuite = this;
			//console.log( xTestSuite.get("AsyncTestCollection") );
			log( "test_" + xTestSuite.get("MethodUnderTest") + ": Is running async tests...", xTestSuite.get("Debug") ); 
			
			return new rsvp.Promise(function( resolve, reject ) {
				if ( _.isEmpty( xTestSuite.get("AsyncTestCollection") ) === true ) {
				//if the async test collection is empty then...
					reject({ "message": "Error: No async tests to test." }); 
				} else {
				//otherwise the async test collection is not empty so...
					var xPromiseSet = _.map( xTestSuite.get("AsyncTestCollection"), function( AsyncTest ) {
						return AsyncTest(); //Run the test and return the promise.
					});
					
					//log([ "PromiseSet: ", xPromiseSet ], xTestSuite.get("Debug"));
					
					rsvp.allSettled( xPromiseSet ).then(function( xPromiseResults ) {
						if (
							_.every( xPromiseResults, function( xPromiseResult ) {
								if ( 
									xPromiseResult.state === "fulfilled" &&
									xPromiseResult.value === true
								) {
									return true;
								} else {
									return false;
								}
							}) === true 
						) {
							log("test_" + xTestSuite.get("MethodUnderTest") + ": All tests passed!", xTestSuite.get("Debug") );
							resolve( true );
						} else {
							log("test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests passed!", xTestSuite.get("Debug") );
							resolve( false );
						}
					});
				}
			});	
		},
    
    "bTestAll": function() {
      var xTestSuite = this;
      log( "test_" + xTestSuite.get("MethodUnderTest") + ": Is running synchronous tests...", xTestSuite.get("Debug") ); 
			if ( 
        _.isNull( xTestSuite.get("TestCollection") ) ||
        _.isEmpty( xTestSuite.get("TestCollection") )        
      ) {
      //if there are no tests to test then...
        throw { "message": "test_" + xTestSuite.get("MethodUnderTest") + ": Has no synchronous tests to test." }  
      } else {
      //otherwise there are tests to test so...
			  if ( 
				  _.every( xTestSuite.get("TestCollection"), function( xTest ) {
					  return xTest();
				  }) === true
			  ) {
			  //if every test passes then...
          log( "test_" + xTestSuite.get("MethodUnderTest") + ": All tests passed!", xTestSuite.get("Debug") );
          return true;
			  } else {
				//otherwise not every test passed so...	
          log( "test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests passed!", xTestSuite.get("Debug") );
          return false;
        }
      }
		},
		
		"bTest": function() {
			var xTestSuite = this;
			log( "test_" + xTestSuite.get("MethodUnderTest") + " is running tests.", xTestSuite.get("Debug") );
			
			return new rsvp.Promise(function( resolve, reject ) {
				var bDebug = xTestSuite.get("Debug");
				//Check to see if the Test Collections are empty.
				
				var xTestCollection = xTestSuite.get("TestCollection");
				var xAsyncTestCollection = xTestSuite.get("AsyncTestCollection");
				log([ "TestCollection:", xTestCollection ], bDebug );
				log([ "AsyncTestCollection:", xAsyncTestCollection ], bDebug );
				
				var bEmptyTestCollection = _.isEmpty( xTestCollection );
				var bEmptyAsyncTestCollection = _.isEmpty( xAsyncTestCollection );
				log( "EmptyTestCollection: " + bEmptyTestCollection, bDebug );
				log( "EmptyAsyncTestCollection: " + bEmptyAsyncTestCollection, bDebug );
				
				//check if both collections are empty.
				if (
					bEmptyAsyncTestCollection === true && 
					bEmptyTestCollection === true 
				) {
				//if both the async test collection and the synchronous test collection are empty then...	
					log( "Error: There are no tests to test.", xTestSuite.get("Debug") );
					reject({ "message": "Error: There are no tests to test." });
				} else if (
					bEmptyAsyncTestCollection === false && 
					bEmptyTestCollection === false
				) {
				//otherwise both test collections are not empty so...
				//if both test collections have tests then...
					xTestSuite.bTestAllAsync().then(function( bAsyncTestResult ) {
						if ( bAsyncTestResult === true ) {
						//If all the async tests passed then...
							//Run the synchronous tests.
							var bResult = xTestSuite.bTestAll();
							if ( bResult === true ) {
							//if all the synchronous tests passed then...	
								resolve( true );
							} else {
							//otherwise not all of the synchronous tests passed so...
								log( "test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests in the Synchronous Test Collection passed.", bDebug )
								resolve( false );
							}
						} else {
						//otherwise not all of the async tests passed so...
							log( "test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests in the Async Test Collection passed.", xTestSuite.get("Debug"), bDebug );
							resolve( false );
						}
					});
				} else {
				//otherwise only one test collection has tests so...
					//find out which test collection has tests.
					
					if ( bEmptyAsyncTestCollection === false ) {
					//if the async test collection is not empty then...
						//Run the Async tests.
						xTestSuite.bTestAllAsync().then(function( bAsyncTestResult ) {
							if ( bAsyncTestResult === true ) {
								resolve( true );
							} else {
								log( "test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests in the Async Test Collection passed.", bDebug );
								resolve( false );
							}
						});
					} else {
					//otherwise the async test collection is empty so...
						//Run the synchronous tests.
						var bResult = xTestSuite.bTestAll();
						if ( bResult === true) {
							resolve( true );
						} else {
							log( "test_" + xTestSuite.get("MethodUnderTest") + ": Not all tests in the Synchronous Test Collection passed.", bDebug );
							resolve( false );
						}
					}
				}
			});
		},
		
		"add": function( Input ) {
			var xTestSuite = this;
			if ( _.has( Input, "Async" ) === true ) {
				if ( Input.Async === true ) {
					xTestSuite.xAddAsyncTest( Input );
				}
			} else {
				xTestSuite.xAddTest( Input );
			}
		},
		
		"test": function( Input ) {
			var xTestSuite = this;
			if ( Input === undefined  ) {
				xTestSuite.bTest().catch(function( Error ) {
					log( "Error:" + JSON.stringify( Error ) );
				});
			} else if ( Input === "Synchronous" ) {
				try {
					xTestSuite.bTestAll();
				} catch ( Error ) {
					log( "Error: "  + JSON.stringify( Error ) );
				}
			} else if ( Input === "Asynchronous" ) {
				xTestSuite.bTestAllAsync().catch(function( Error ) {
					log( Error );
				});
			}
		}
  });
});   