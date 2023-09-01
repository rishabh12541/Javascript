// Inheritance in simple terms is virasat mai milna, means we can inherit properties of a class into a other class, which also satisfies DRY(Don't repeat ypurself in coding). 
function BankAccount(customerName, balance = 0 ) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount ;
}
BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount ;
}

function CurrentAccount(customerName, balance = 0 ) {
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype)

CurrentAccount.prototype.takeBusinessLoan = function(amount) {
    console.log("Taking Business Loan of " + amount) ;
}

function SavingAccount(customerName, balance = 0 ) {
    BankAccount.call(this, customerName, balance) // This is called Contructor Linking, here 'call' is a static method.
    this.transactionLimit = 50000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype) // Can also be written as SavingAccount.prototype = BankAccount.prototype;

SavingAccount.prototype.takePersonalLoan = function(amount) {
    console.log("Taking Personal Loan of " + amount) ;
}


const rishabhAccount = new SavingAccount("Rishabh", 100000)
rishabhAccount.deposit(5000);
console.log(rishabhAccount);


//==========================================================================Class Syntax

class BankAccount1 {
    customerName;
    accountNumber;
    balance = 0 ; 

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

class CurrentAccount1 extends BankAccount1{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance) // If we are inheriting from some class , then first we call 'super' constructor.
    }

    takeBusinessLoan = function(amount) {
        console.log("Taking Business Loan of " + amount) ;
    }

}

const johnAccount = new CurrentAccount1("John", 1000)
johnAccount.deposit(5000);
console.log(johnAccount);