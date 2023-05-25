class Worker {
    constructor(firstName, secondName, rate, days){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate*this.days
    }
}

const workerIvan = new Worker('Ivan', 'Ivanov', 10, 31);
const workerPetro = new Worker('Petro','Petriv', 19, 40)
console.log(workerIvan.firstName);
console.log(workerIvan.secondName);
console.log(workerIvan.rate);
console.log(workerIvan.days);
console.log(workerIvan.getSalary());
console.log('Сума зарплат Івана та Петра:', workerIvan.getSalary()+workerPetro.getSalary())