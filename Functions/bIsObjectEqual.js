//bIsObjectEqual.js: Functional logic for the investment application.

define([], function() {
	function bIsObjectEqual( Array1, Array2 ) {
		var sArray1 = JSON.stringify( Array1 );
		var sArray2 = JSON.stringify( Array2 );
		
		var bResult = true;
		
		//Check if the arrays have the same length.
		if ( sArray1.length == sArray2.length ) {
		//if the length of sArray1 is equal to the length of sArray2 then...
			for ( var nIndex = 0; nIndex < sArray1.length; nIndex++ ) {
			//for nIndex starting at 0, while nIndex is less than the length of the first array, 
			//do the following, then add one to nIndex.
				if ( sArray1[nIndex] !== sArray2[nIndex] ) {
				//if the Nth element of the first and second array are not equal then...
					bResult = false;
				}
			}
		} else {
		//otherwise the array lengths arent equal.
			bResult = false;
		}
		
		return bResult;
	}
	
	return bIsObjectEqual;
});