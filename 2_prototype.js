function BankAccount(customerName, balance = 0 ) { 
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = (amount) => {
    //     this.balance +=  amount; 
    // }

    // this.withdraw = function(amount) {
    //     this.balance -= amount ;
    // }
} /* Here we can see the problem that whenever a object will be created of this constructor memory will be alloted to it, 
here name, accountNumber and balance should be diifferent for every object but 'deposit' and 'withdraw' are common so we should 
try to make it common */

/* 'this' points to the current object*/

const rishabhAccount = new BankAccount("Rishabh Bindal", 10000);
const johnAccount = new BankAccount("John");
// console.log(rishabhAccount, johnAccount);

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount ;
} /* We cannot use arrow function here as it does not have a context of its own so it will take context from outer scope which is 'window' object here and it will find there and will not get there  , so we need to use normal function */
BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount ;
}
rishabhAccount.deposit(5000); // We'll get a confusion here that deposit is not present in the BankAccount constructor function so how can we use it , therefore here comes prototype chaining , first it will look in the BankAccount if it not gets there it will look in the prototype of its constructor, if not found there it will look into the constructor of BankAccount which is 'Object' and will look in prototype of it, this is prototype chaining, 'Object' is the father of all things in Javascript..
johnAccount.deposit(3000);
console.log(BankAccount.prototype, rishabhAccount, johnAccount ) // Whenever a function is created in JS it makes a empty prototype object {} and we know we can add any variable or method to it by using '.'    
// Array and Object are in-built constructors in JS.