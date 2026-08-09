//Synchronous Execution//

//Write a program that logs three messages in order: "Start", "Middle", "End".

console.log("Start");
console.log("Middle");
console.log("End");

//Create a function that calls another function and logs the execution order step by step.


function firstFunction() {
    console.log("Hello ");
}

console.log("Started");

firstFunction();

console.log("Ended");


//Write a program that performs two or more calculations sequentially and prints the results.

let num1 = 20;
let num2 = 5;

let add = num1 + num2;
console.log("Addition =", add);

let sub = num1 - num2;
console.log("Subtraction =", sub);

let multip = num1 * num2;
console.log("Multiplication =", multip);

let division = num1 / num2;
console.log("Division =", division);


//Build a simple function flow where one function depends on the result of another function.

function Number(num) {
    return num * 2;
}

function Result(num) {
    let result = Number(num);
    console.log(result);
}

Result(5);



//Asynchronous Basics (setTimeout)//

//Write a program that prints "Hello" immediately and "World" after 2 seconds.

console.log("Hello");

setTimeout(function () {
    console.log("World");
}, 2000);


//Create a function that prints numbers from 1 to 5, each number after 1 second delay.
function Numbers() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
Numbers();

//Write a program that shows "Loading..." instantly and "Done" after 3 seconds.

console.log("Loading...");

setTimeout(function () {
    console.log("Done");
}, 3000);


//Simulate a delayed message system using setTimeout

function Message(message) {
    console.log("HELLO");

    setTimeout(function () {
        console.log(message);
    }, 2000);
}

Message("Hello, Zainab!");

// JavaScript Runtime & Event Loop//

//Write a program using console.log and setTimeout and predict the output before running it.

console.log("First");

setTimeout(function () {
    console.log("Second");
}, 1000);

console.log("Third");

// Create a code snippet mixing synchronous logs and setTimeout(0) and explain the execution order.

console.log("A");

setTimeout(function () {
    console.log("B");
}, 0);

console.log("C");

//Execute the call stack.
//Move the callback from the queue.
//Execute the callback function.


//Write a program that demonstrates how JavaScript executes line by line despite asynchronous behavior.

console.log("First");

console.log("Second");

setTimeout(function () {
    console.log("Third");
}, 2000);

console.log("Fourth");


//Build a small example showing how async tasks are delayed until the call stack is empty.

console.log("Start");

setTimeout(function () {
    console.log("Timeout finished");
}, 0);

for (let i = 1; i <= 5; i++) {
    console.log("Task", i);
}

console.log("End");


// Callback Functions//

//Create a function that takes a name and a callback, prints a greeting, then executes the callback.
function greet(name, callback) {
    console.log("Hello, " + name);

    callback();
}

function sayGoodbye() {
    console.log("Have a nice day!");
}

greet("Zainab", sayGoodbye);


//Write a calculator function that takes two numbers and a callback for operations (add, subtract, multiply).

function calculator(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log(result);
}

function addtion(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

calculator(10, 5, addtion);
calculator(10, 5, subtract);
calculator(10, 5, multiply);

//Create a function that simulates loading data and calls a callback when the loading is finished.

function loadData(callback) {
    console.log("Loading data...");

    setTimeout(function () {
        console.log("Loading completed.");
        callback();
    }, 2000);
}

function showData() {
    console.log("Data displayed.");
}

loadData(showData);

//Build a simple authentication flow using callbacks (login → success message → next step).

function login(username, callback) {
    console.log("Logging in");

    setTimeout(function () {
        console.log("Welcome, " + username);
        callback();
    }, 2000);
}

function openDashboard() {
    console.log("Opened.");
}

login("Zainab", openDashboard);