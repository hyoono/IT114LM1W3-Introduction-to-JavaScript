/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
console.log("-------------------------TODO 1.1 to 1.3---------------------------")
// Your code here
var x = "Hello World"
console.log(x)

console.log(y)
var y = "Hello World"

//Answer: The variable is undefined when it is declared after the console.log.

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let a = "Hello World"
console.log(a)
//Answer: let keyword is similar to var but is limited in the scope of its declaration.

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const b = 1
//b = 2
console.log (b)
//Answer: Node.js throws an error as the const keyword is used for a constant declaration.


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is used for declaring variables that is accessible globally and can be changed at runtime. let is limited to where it was declared.
// const is used for declaring constant values and cannot be changed at runtime

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log("----------------------------TODO 1.4---------------------------")
const c = 10
const d = 20
console.log("10 + 20 =", c + d)
console.log("10 - 20 =", c - d)
console.log("10 * 20 =", c * d)
console.log("10 / 20 =", c / d)
console.log("10 % 20 =", c % d)
console.log("10 ** 20 =", c ** d)

// Checkpoint 1.2 What operators did you use?
// Answer: I used the addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponent (**) operators of JS
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
console.log("----------------------------TODO 1.5---------------------------")
// Your code here
var e =  "Good"
let f = "Morning"
f += " to you!"

console.log(e + " " + f)

// Checkpoint 1.3 What operators did you use?
// Answer: I have used the concatenate operator (+) and the assignment operator (+=).

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
console.log("----------------------------TODO 1.6---------------------------")
// Your code here
const g = 10 && 11
const h = 10 || 11
const i = !10
console.log(g)
console.log(h)
console.log(i)
// Checkpoint 1.4 What operators did you use?
// Answer: I  have used the logical and (&&), logical or (||) and logical not(!) operators.


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
console.log("----------------------------TODO 1.7---------------------------")
console.log([] == false)
// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It returns true. This is because the [] is an empty array and when compared to a boolean value, it is converted to a number. When it is converted to a number, it is converted to 0.
//0 is a falsy value and hence, it returns true.
// Your code here
console.log("----------------------------TODO 1.7 (array)---------------------------")
const j = ["Hello", "World", "alphabet", "random", "users"]
const k = 0 in j
const l = 6 in j
const m = "alphabet" in j 
console.log(k)
console.log(l)
console.log(m)