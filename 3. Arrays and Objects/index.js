/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("----------------------------TODO 3.1---------------------------");
console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[numbers.length - 1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
console.log("----------------------------TODO 3.2---------------------------");
let min = numbers[0];
let max = numbers[0];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
    sum += numbers[i];
}
console.log("min", min);
console.log("max", max);
console.log("average", sum / numbers.length);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Arrays in JavaScript are limited in the functionality as it can only contain one data type compared to lists in python.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
console.log("----------------------------TODO 3.3---------------------------");
let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    numberOfStudents: 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
console.log("----------------------------TODO 3.4---------------------------");
IT114L.professorName = "Job Lipat";
console.log("Professor's Name for IT114L:", IT114L.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
console.log("----------------------------TODO 3.5---------------------------");
let courses = [
    {
        courseCode: "IT114L",
        name: "Web Systems and Technologies (Laboratory)",
        units: 1,
        numberOfStudents: 40
    },
    {
        courseCode: "IT114",
        name: "Web Systems and Technologies",
        units: 2,
        numberOfStudents: 37
    },
    {
        courseCode: "IT133",
        name: "Technopreneurship",
        units: 3,
        numberOfStudents: 26
    },
    {
        courseCode: "IT132",
        name: "Logic Design and Switching Theory",
        units: 2,
        numberOfStudents: 32
    },
    {
        courseCode: "IT132L",
        name: "Logic Design and Switching Theory (Laboratory)",
        units: 1,
        numberOfStudents: 41
    },
    {
        courseCode: "HUM039",
        name: "Ethics",
        units: 3,
        numberOfStudents: 28
    },
    {
        courseCode: "CS107",
        name: "Information Management",
        units: 2,
        numberOfStudents: 40
    },
    {
        courseCode: "CS107L",
        name: "Information Management (Laboratory)",
        units: 2,
        numberOfStudents: 19
    }
]


// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
console.log("----------------------------TODO 3.5---------------------------");
let totalUnits = 0;
for (let i = 0; i < courses.length; i++) {
    totalUnits += courses[i].units;
}
console.log("Total units taken this term:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: I believe that the closest equivalent of JavaScript objects will be dictionaries in python. While they operate differently syntax-wise, their fundamental purpose is similar.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
console.log("----------------------------TODO 3.6---------------------------");
let numbersCopy = [...numbers, 69];
console.log(numbersCopy);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log("----------------------------TODO 3.7---------------------------");
let { courseCode, units } = IT114L;
console.log("Selected Course Code:", courseCode);
console.log("Units of Course:", units);

