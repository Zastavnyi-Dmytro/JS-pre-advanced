function CoffeMake(){
    function on(){
        console.log('turned on')
    }
    function off(){
        console.log('turned off')
    }
}

CoffeMake.prototype.drip = function(){
    console.log('dripping')
}

CoffeMake.prototype.carob = function(){
    console.log('carob')
}

CoffeMake.prototype.coffeMachine = function(){
    console.log("coffe machine is working")
}
