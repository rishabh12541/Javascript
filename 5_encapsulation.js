// Encapsulation is something that we do not need to show complex and important parts of code to the user and only the important thing.
// In normal terms Encapsulation is defined as wrapping up of data and information under a single unit. In Object Oriented Programming, Encapsulation is defined as binding together the data and the functions that manipulates them.
class BankAccount1 {
    customerName;
    accountNumber;
    #balance = 0 ; // Using '#' before a variable makes it private in JS and can be accessed only in this class.

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(balance) {
        if(isNaN(balance)) {
            throw new Error("Amount is not a valid Input");
        }
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    // There is a new syntax for getters and setters now.

    set balance (amount) {
        this.#balance = amount;
    }

    get balance () {
        return this.#balance;
    }
}

class CurrentAccount1 extends BankAccount1{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance) // If we are inheriting from some class , then first we call 'super' constructor.
        // console.log(this.#balance) // This will give error here, as private property can also not be used in it's child class.
    }

    #calaculateInterest(amount) { // We can also make methods private like this.
        // this.takeBusinessLoan();
        console.log('Calculating Interest');
    }

    takeBusinessLoan(amount) {
        this.#calaculateInterest();
        console.log("Taking Business Loan of " + amount) ;
    }

}

const rishabhAccount = new CurrentAccount1("Rishabh", 1000);
// rishabhAccount.setBalance('Hello'); --> This will throw a error "Amount is not a valid Input" .
rishabhAccount.setBalance(4000);
console.log(rishabhAccount.getBalance(), rishabhAccount.balance); // We will not call 'balance' as a method here as we 'set' and 'get' keywords.
rishabhAccount.balance = 5000;  // We will not call 'balance' as a method here as we 'set' and 'get' keywords.
console.log(rishabhAccount.getBalance(), rishabhAccount.balance);
rishabhAccount.takeBusinessLoan(5000);