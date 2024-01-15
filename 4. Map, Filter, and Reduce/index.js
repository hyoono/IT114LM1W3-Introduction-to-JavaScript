/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 4.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
console.log("----------------------------TODO 4.1---------------------------");
console.log("Set of Numbers: ", numbers);
const squares = numbers.map((number) => number * number);
console.log("Set of numbers, squared: ", squares);

// TODO 4.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
console.log("----------------------------TODO 4.2---------------------------");
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers: ", evenNumbers);

// TODO 4.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
console.log("----------------------------TODO 4.3---------------------------");
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Sum of numbers:", sum);

// TODO 4.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
console.log("----------------------------TODO 4.4---------------------------");
console.log("Words: ", words);
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log("Words in uppercase: ", upperCaseWords);

// TODO 4.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
console.log("----------------------------TODO 4.5---------------------------");
const longWords = words.filter((word) => word.length > 4);
console.log("Words with more than four letters: ", longWords);

// TODO 4.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
console.log("----------------------------TODO 4.6---------------------------");
const concatenatedWords = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Concatenated words: ", concatenatedWords);

// Checkpoint 4.1 Summarize what map, filter, and reduce do
// Answer: Map, filter, and reduce are functions of the arrays in JavaScript. Map is used to create an array from an existing one. Filter is used to create an array
// that only has the content that meet a certain parameter. Reduce is used to create a single, unified value from an existing array.