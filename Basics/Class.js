//CREATING CLASSES IN JS

// Way 1 : Constructor Function
function Person (firstName,otherNames,dob,nationality){
 
    this.firstName = firstName;
    this.otherNames = otherNames;
    this.dob = dob;
    this.nationality = nationality;

    function sayName(){
        console.log(this.name);
    }

}

// Prototyping makes you add properties to the constructor
Person.prototype.fullname = function (){
    return this.firstName+ " " +this.otherNames;
}

var opoku = new Person("Kwame","Koranteng Opoku","2001-04-31","Ghanaian");

console.log(opoku.fullname());


// Way 2 : ES6 Classes
class Transaction{

    createdAt;
    updatedAt;
    amount;
    medium;
    currency;

    constructor(createdAt,updatedAt,amount,medium,currency){
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.amount = amount;
        this.medium = medium;
        this.currency = currency;
    }

    /**
     * Method is a "function" that belongs to a class
     */
    sayAmount(){
        console.log(this.currency+" "+this.amount);
    }
}

Transaction.prototype.bankNumber = "5";

var payFees = new Transaction("18-04-2024","18-04-2024",1000,"Bank","Ghc");

payFees.sayAmount() // outputs "Ghc 1000"
console.log(payFees.bankNumber)  //outputs 5



function Test (){
 return new Set();
}



