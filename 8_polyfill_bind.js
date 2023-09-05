// Polyfill for 'bind' is like creating 'bind' function yourself, which here is 'myBind'.
let name = {
    firstName: 'Rishabh',
    lastName: 'Bindal',
}

let printName = function (homwtown, state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + homwtown + " of state " + state + " of country " + country);
}

let printMyName = printName.bind(name, 'Mathura');
printMyName('Uttar Pradesh', 'India');

Function.prototype.myBind = function(...args) {
    let obj = this // We want to access printName, which can be accesse by 'this' keywprd here.
    let params = args.splice(1) // It will return a array which will not contain 0th index element which is the reference, so we use apply method.
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(name, 'Mathura');
printMyName2('Uttar Pradesh', 'India');