// Here function currying is using multiply method here to create 'multiplyByTwo' and 'multiplyByThree' method here by presetting some arguments , which here is x we are setting is as 2 and 3 respectively.
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// Next is by using closures

let multiplySecond = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyValue = multiplySecond(2);
multiplyValue(3);

console.log(this)

let obj = {
    name: 'Rishabh',
    lastName: 'Bindal',
    printMyName: function() {
        console.log(this)
    }
}

obj.printMyName();


// ===================================================================================================================================
function value() {
    console.log(this) // This will print many other things in node environment, but will print window object in browser.
}

value()
