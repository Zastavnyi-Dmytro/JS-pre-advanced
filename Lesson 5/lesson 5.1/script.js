function counter(){
    let q = 0;
    return function inner(step){
        q= q+step;
        console.log(q)
    }
}

let sum = counter();
sum(3);
sum(5);
sum(228);