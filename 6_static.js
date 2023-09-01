// Static properties and methods are those which does not depend on the instance of the class and are common to all instances OR objects of the class.
class User {
    name;
    age;
    income;
    static id = 1 ;
    constructor(name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }

    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2) {
        return user1.income - user2.income;
    }

    static { // This is a 'static' block and will be called automatically only once when a static method is called.
        console.log("Welcome")
    }

    static greet(name) {
        console.log("Hello "+name);
    }

    static greetName() {
        this.greet("Rishabh"); // We discussed that static is not available on instance and 'this' refers to the current instance but 'this' pointing to a static method or property can be used only inside a static method only. 
    }
}

const user1 = new User("Rishabh", 23, 4000000);
const user2  = new User("John", 30, 40000);
const user3 = new User("Jane", 20, 20000);

const users = [user1, user2, user3];
users.sort(User.compareByIncome) // All other methods and properties are are stored on instances OR objects but static methods and properties are stored on class only, that is why we cannot call it from instance and from class only.
User.greetName()
console.log(users);
// 'this' is used when we want to use property or method on a particular instance.