//function.js: Functional Logic.

define([], function() {
  return function( Options ) {
	log("Inside function!");
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
		
		log("At the end of function!");
		return xTest;
	}
    }
  };
});
