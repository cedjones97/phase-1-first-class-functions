

function receivesAFunction(spy){

    return spy()
}

function returnsANamedFunction(beforeAll){

    return function beforeAll(){}
}


function returnsAnAnonymousFunction(){

    return function(){}

} 