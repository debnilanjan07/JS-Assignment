//function with zero parameters and a console statement

function print() {
    console.log("hi this is a print function");
}

//function which takes two parameters and prints their sum

function add(a, b) {
    console.log(`Sum of ${a},${b} is ${a + b}`);
}

add(4, 3);

//create an arrow function

const arrowFunction = () => {
    console.log("this is an arrow function");
}

arrowFunction();

//find the output of the code below

var x = 21;
var girl = () => {
    console.log(x); //it will give us undefined beacuse var x =20 is hoisted so var x is initialized but not assigned a value
    var x = 20;
};
girl();

//find output of the code below


var x = 21;
girl();//undefined since the var x =20 inside the accesssed before initialisation and var keywords are hoisted 
console.log(x)// prints 21 beacuse var x=21 is initialised and assigned a value before accessing 

function newFunction() {
    return 20;
}
newFunction;

function girl() {
    console.log(x);
    var x = 20;
};

//find output for the code below



var x = 21;
a();// only functions are hoisted not function expressions so not defined
b();//same as above
//console.log(a);//not defined trying to access before initialization
a = function () {

    x = 20;
    console.log(x);//cant print since a is not called
};
b = function () {

    x = 40;
    console.log(x);//cant print since b is not called
};
//a();//if it is called here it will give 20
// b();//it will give 40(only if they were called here and it shouldnt be called before )


//function which accepts n as a parameter and returns factorial of n

const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let result = factorial(4);//return factorial of 4
console.log(result);//prints factorial of 4




