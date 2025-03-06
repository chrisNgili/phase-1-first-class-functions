function receivesAFunction(oxford){
    console.log(oxford());
}
receiveAFunction(function() {return ("bollocks,oxford")});

function returnsANamedFunction(){
    return function bus(bike){
        return bike
    }
}
function returnsAnAnonymousFunction(){
    return function(Rick){
        console.log(Rick)
    }
}