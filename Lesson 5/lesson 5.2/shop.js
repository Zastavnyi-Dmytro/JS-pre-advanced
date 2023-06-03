let balance = 1000;
let beer = 100;
let vine = 50;
let pepsi = 80;
let beerPrice = 10
let vinePrice = 20
let pepsiPrice = 15
let beerCount = 0
let vineCount = 0
let pepsiCount = 0
let beerToBuy = 0
let vineToBuy = 0
let pepsiToBuy = 0
let finalPrice = 0

export function checkBalance() {
    return `${balance}грн.`
}

export function checkBeer() {
    return beer
}

export function addBeer(count) {
    if (count <= beer) {
        beerToBuy = 0
        beer -= count
        beerToBuy += beerPrice * count
        beerCount += count
    }
    return beer
}

export function beerBuy() {
    return beerCount
}

export function checkVine() {
    return vine
}

export function addVine(count) {
    if (count <= vine) {
        vineToBuy = 0
        vine -= count
        vineToBuy += vinePrice * count
        vineCount += count
    }
    return vine
}

export function vineBuy() {
    return vineCount
}

export function checkPepsi() {
    return pepsi
}

export function addPepsi(count) {
    if (count <= pepsi) {
        pepsiToBuy = 0
        pepsi -= count
        pepsiToBuy += pepsiPrice * count
        pepsiCount += count
    }
    return pepsi
}

export function pepsiBuy() {
    return pepsiCount
}

export function fullPrice() {
    finalPrice = 0
    beerCount = 0
    vineCount = 0
    pepsiCount = 0
    return finalPrice += (pepsiToBuy + beerToBuy + vineToBuy)
}

export function finalBalance() {
    return balance += finalPrice
}
