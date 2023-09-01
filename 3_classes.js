// const rishabhAccount = new BankAccount("Rishabh", 100000)

class BankAccount { // class is also hoisted but it cannot be used before initialisation, as it is stored in place than global scope which is script.
    customerName;
    accountNumber;
    balance = 0 ; 

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    // We do not need to add methods in prototype object like in constructor function , when we use class it will be by default added to the prototype object. 
    deposit(amount) { // No need to use function keyword when defining method in class. 
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const rishabhAccount = new BankAccount("Rishabh", 100000)
console.log(rishabhAccount);
rishabhAccount.deposit(20000);
const johnAccount = new BankAccount("John");
console.log(johnAccount);
johnAccount.deposit(500);
johnAccount.withdraw(100);
console.log(johnAccount);