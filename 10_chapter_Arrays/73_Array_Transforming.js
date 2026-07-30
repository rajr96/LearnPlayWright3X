// Array_Transforming
let scores = [10, 20, 30, 40, 50];

//map() - creates a new array with the results of calling a provided function on every element in the calling array
let doubledScores = scores.map(score => score * 2);
console.log(doubledScores); // Output: [20, 40, 60, 80, 100]

//filter() - creates a new array with all elements that pass the test implemented by the provided function
let highScores = scores.filter(score => score > 30);
console.log(highScores); // Output: [40, 50]    

let grades = scores.map(s => s >= 40 ? "pass" : "fail");
console.log(grades); // Output: ["fail", "fail", "fail", "pass", "pass"]


//transforming an array of objects
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

let studentNames = students.map(student => student.name);
console.log(studentNames); // Output: ["Alice", "Bob", "Charlie"]

//reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let totalScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalScore); // Output: 150 

//reduceRight() - applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value   
let totalScoreRight = scores.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalScoreRight); // Output: 150    

//some() - tests whether at least one element in the array passes the test implemented by the provided function
let hasHighScore = scores.some(score => score > 40);
console.log(hasHighScore); // Output: true  

//every() - tests whether all elements in the array pass the test implemented by the provided function
let allHighScores = scores.every(score => score > 40);
console.log(allHighScores); // Output: false    

//flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]  

//flatMap() - first maps each element using a mapping function, then flattens the result into a new array
let words = ["hello", "world"];
let letters = words.flatMap(word => word.split(""));
console.log(letters); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"] 

//transforming an array of objects with flatMap
let studentsWithSubjects = [
    { name: "Alice", subjects: ["Math", "Science"] },
    { name: "Bob", subjects: ["History", "Art"] },
    { name: "Charlie", subjects: ["Math", "History"] }
];

let allSubjects = studentsWithSubjects.flatMap(student => student.subjects);
console.log(allSubjects); // Output: ["Math", "Science", "History", "Art", "Math", "History"]

