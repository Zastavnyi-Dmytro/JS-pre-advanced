class CoffeeMake {
    on(){
        return 'turned on'
    }
    off(){
        return 'turned off'
    }
}

class Drip extends CoffeeMake {
    drip(){
        return 'dripping'
    }
}
class Carob extends CoffeeMake {
    carob(){
        return 'carob'
    }
}
class CoffeMachine extends CoffeeMake {
    coffeMachine(){
        return 'coffe machine is working'
    }
}

let test = new CoffeeMake
let test2 = new Drip
console.log(test2.drip())