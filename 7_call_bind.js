let name1 = {
    name: 'Rishabh',
    lastName: 'Bindal',
}

let name2 = {
    name: 'Virat',
    lastName: 'Kohli',
}

let printName = function (homwetwon, state) {
    console.log(this.name + " " + this.lastName + " from " + homwetwon + " of " + state)
}

// .call() is like function borrowing in javascript in which pass current refernce to refer to.

// Example

printName.call(name1, 'Mathura', 'UttarPradesh');
printName.call(name2, 'Delhi' , 'Union Territory');

printName.apply(name1, ['Mathura', 'UttarPradesh']) // The only difference between call and apply is how we pass the arguments , in .call() we pass as individual arguments, where as in apply , we pass as list of arguments.

// bind method
let printMyName = printName.bind(name1, 'Mathura', 'UttarPradesh'); // It will make a copy of printName and bind that to name1, so return that to 'printMyName' for later use.
printMyName();

// The difference between call() and bind(), call() is invoked directly, whereas bind() returns a copy of the fucntion binding forcefully to the object reference for the later use.