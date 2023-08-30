function BankAccount(customerName, balance = 0 ) { /* We can also set the first letter of functionName to be small but naming conventions says to keep it UpperCase.*/
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance +=  amount; 
    }

    this.withdraw = function(amount) {
        this.balance -= amount ;
    }
} /* This is also a constructor function*/

const rishabhAccount = new BankAccount("Rishabh Bindal", 10000); /* This object is a instance of this constructor function and hence each and every object is alloted new memory.*/
const johnAccount = new BankAccount("John");
console.log(rishabhAccount);
console.log(johnAccount); 
// rishabhAccount.balance = 20000; /* We use OOP to prevent this from happening as no one should change the value from outside which is the property known as encapsulation and should use getters and setters.*/
rishabhAccount.deposit(5000);
console.log(rishabhAccount.customerName, rishabhAccount.balance);
johnAccount.deposit(10000) 
console.log(johnAccount.customerName, johnAccount.balance);
rishabhAccount.withdraw(2000);
console.log(rishabhAccount.customerName, rishabhAccount.balance);


// ==============================================================Interacting with form

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#deposit Form');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Will stop from refreshing the page.
    const account = new BankAccount(customerName.value, +balance.value); /* '+' in front of any value converts it to number. */
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value) /* Will return the that value of the array which fulfills the condition.*/
    account.deposit(+amount.value);
    console.log(accounts)
}) /* Each object is alloted its own memory and then changing of other objects memory won't affect its value */