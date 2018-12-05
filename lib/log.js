//log.js: Prints the input to the console unless the second argument is false.

define([], function() {
  return function( Input, Boolean ) {
    if ( Boolean === undefined ) {
      Boolean = true;
    }
    
    
    if ( Boolean === true ) {
      console.log( Input ); 
    }
  };
});
