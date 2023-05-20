function CoffeMake(on,off){
    this.on = on;
    this.off = off
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
