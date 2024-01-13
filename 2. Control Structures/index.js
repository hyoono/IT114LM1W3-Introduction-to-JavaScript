/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log("----------------------------TODO 2.1---------------------------");

if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
console.log("----------------------------TODO 2.2---------------------------");
if (randomNumber % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
console.log("----------------------------TODO 2.3---------------------------");
if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz");
}
else if (randomNumber % 3 == 0) {
    console.log("fizz");
}
else if (randomNumber % 5 == 0) {
    console.log("buzz");
}
else {
    console.log(randomNumber);
}

console.log("----------------------------TODO 2.4---------------------------");
let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber % 2 == 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: switch statements are usable if a variable is to be compared with multiple values. This is especially useful when validating input and creating menu for applications.

// TODO 2.5 Use a for loop to print the numbers 1 to N
console.log("----------------------------TODO 2.5---------------------------")
const n = 10
// Your code here
for (let i = 1; i <= n; i++) {
    console.log(i);
}

console.log("----------------------------TODO 2.6---------------------------")
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) {
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: JavaScript has a do-while loop functionality part of its syntax. It follows the same format as other do-while loops in other languages.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("----------------------------TODO 2.7---------------------------")
for (let i of list){
    console.log(i);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("----------------------------TODO 2.8---------------------------")
for (let i in list){
    console.log(list[i]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("----------------------------TODO 2.9---------------------------")
list.forEach(element => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for-of loops are used when the index of the element is not needed. for-in loops are used when the index of the element is needed. They are useful if an array has to be modified on runtime.
// forEach loops are used when the index of the element is not needed and the array is not to be modified. It is useful of listing out the array in sequence on the array

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
console.log("----------------------------TODO 2.10---------------------------")
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing
try{
    if (denominator == 0) {
        throw "division by zero";
    }
    else{
    const quotient = numerator / denominator;
    console.log(quotient);}
}
catch (err) {
    console.log("Error encountered")
    console.log(err);
}
finally {
    console.log("cleaning up resources");
}


