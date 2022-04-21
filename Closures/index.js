
// Que.1
function counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// When web page will be loading it shows 4 times alert by giving popup message "This page is 4".
//After 4th times web page is displayed.//

// Que.2--
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // 1
    }
    console.log(count); // 0
})();
//output-- 1
// 0

//Que-3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i);
    }, 1000);
}
///Output-> (three times)   3 

//Que.4--
// Print Output

var a = 12;
(function () {
    alert(a);
})();
// An alert popup message is shows "This page is 12".
// Que.5--
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    };
})();
x();
// An alert popup message is shows "This page is 12"

//Ques6.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + "outerArg" + "\n" +
            "innerArg = " + "innerArg" + "\n" +
            "outerVar = " + "outerVar" + "\n" +
            "innerVar = " + "innerVar" + "\n" +
            "globalVar = " + "globalVar");

    })(456);
})(123);
//output -> 
/*outerArg = outerArg
innerArg = innerArg
outerVar = outerVar
innerVar = innerVar
globalVar = globalVar*/

//Que.7-- Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

const outerFunction = function (length) {
    innerFunction = function (breadth) {
        console.log(`the area of ractangle is ${length * breadth}`);
    }
}
outerFunction(20);
innerFunction(50);
//output-> 1000

//Que.8--Take a variable in outer function and create an inner function to increase the counter every time it is called

let outer = function () {
    variableCount = 0;
    inner = function () {
        console.log(`the count is ${variableCount += 1}`)
    }
}

outer();
inner();//1
inner();//2
inner();//3
inner();//4
inner();//5