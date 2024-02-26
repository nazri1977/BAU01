function greet() {
    console.log('Hello World');
}

greet();

function greet(name) {
    console.log('Hello ' + name + "!");

    
}

greet('Nazri');

function add(num1, num2){
    return num1 + num2;
}

let sum= add(3,5)
console.log(sum);

let square = function (x) {
    return x * x;
}

console.log(square(4));

meet();

function meet() {
    console.log("hey!");
}


/* sq1();
let sq1 = function (x) {
    return x * x;
} */

let anon=function() {
    console.log('This is an anonymous function');
}


anon();

let globalVar = 'I am a global variable';

function accessVar () {
    console.log(globalVar);
}

accessVar();

function accessVar() {
    let localVar = 'I am a local var'

    console.log (localVar);
}

//accessVar();
//console.log (localVar);
console.log (globalVar);

function outerFunction() {
    let outerVar = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();


function fName(name) {
    console.log("Hi " + name );
}

function sayHi (greetingFunction) {
    greetingFunction("Alice");
}

sayHi(fName);


function applyOperation (x,y,operation) {
    return operation(x,y);
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

let result1 = applyOperation(4,3,add);
let result2 = applyOperation(6, 3, subtract);

console.log(result1);
console.log(result2);