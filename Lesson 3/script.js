function CoffeMake(){
    function on(){
        return 'turned on'
    }
    function off(){
        return 'turned off'
    }
}

CoffeMake.prototype.drip = function(){
    return 'dripping'
}

CoffeMake.prototype.carob = function(){
    return 'carob'
}

CoffeMake.prototype.coffeMachine = function(){
    return "coffe machine is working"
}
