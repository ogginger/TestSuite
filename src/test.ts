import * as _ from "lodash";

async function every( array: any[], callback: any ) {
    let result = true;
    for ( let index = 0; index < array.length; index++ ) {
        if (!await callback( array[index], index, array )) {
            result = false;
            break;
        }
    }
    return result;
}

class Test {
    constructor( protected tests: any[] = [] ) {}
    protected async testFunction( test: any ): Promise<boolean> {
        let testResult: boolean;
        let output: any;
        let method: any = test.function;
        if ( method == undefined ) {
            console.log(test.name + " failed!");
            throw new Error("The function does not exist.");
        }
        if ( test.context ) {
            test.context = (typeof test.context == "function")? await test.context(): test.context;
            method = method.bind( test.context, ...test.input );
        } else {
            method = method.bind( this, ...test.input );
        }
        if ( test.exception ) {
            let exception = undefined;
            try {
                await method();
            } catch ( error ) {
                exception = error.toString? error.toString(): JSON.stringify( error );
            } finally {
                output = exception;
            }
        } else {
            try {
                output = await method();
            } catch ( error ) {
                console.log(error.toString? error.toString(): JSON.stringify( error ));
                testResult = false;
            }
        }
        try {
            if ( typeof test.output == "function" ) {
                test.output = await test.output( output );
            }
            if ( typeof test.assert == "function" ) {
                testResult = test.assert.call( test.context, output, test.output );
            } else if ( test.assert ) {
                throw new Error("The assert method needs to be a function.");
            } else {
                testResult = (JSON.stringify( output ) == JSON.stringify(test.output));
            }
        } catch ( error ) {
            console.log(test.name + " failed!");
            throw error;
        }
        
        try {
            if ( test.cleanup ) {
                await test.cleanup.call( test.context, output, ...test.input );
            }
        } catch ( error ) {
            console.log(test.name + " cleanup throw an error!");
            console.log(error.toString? error.toString(): JSON.stringify( error ));
        }
        
        if ( test.debug ) {
            console.log("Output: ", JSON.stringify( output ));
            console.log("Expected: ", JSON.stringify( test.output ));
        }
        return testResult;
    }

    

    public async evaluate() {
        let self = this;
        let tests = self.tests;
        let final: any = undefined;
        if ( tests.length == 0 ) {
            throw new Error("There are no tests to test.");
        } else {
            await every(tests, async function( test: any ) {
                let result = await self.testFunction( test );
                final = {
                    state: result,
                    message: result? "All tests passed!": "Test: " + test.name + " failed!"
                };
                return result;
            });
    
            return final;
        }
    }
}

export default async function test( tests: any[] ) {
    console.log("Running tests...");
    tests = tests.filter(( test: any ) => test.run || test.run == undefined);
    let result = await new Test( tests ).evaluate();
    console.log( result.message );
    return result.state;
}
