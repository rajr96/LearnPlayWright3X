//Array_sorting
let numbers = [4, 2, 5, 1, 3];
console.log(numbers.sort()); // Output: [1, 2, 3, 4, 5] - sorts in ascending order

let fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort()); // Output: ["apple", "banana", "cherry"] - sorts in alphabetical order

let mixed = [3, "banana", 1, "apple", 2];
console.log(mixed.sort()); // Output: [1, 2, 3, "apple", "banana"] - sorts numbers first, then strings

let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

// Sorting students by score in ascending order
students.sort((a, b) => a.score - b.score);
console.log(students); // Output: [{ name: "Charlie", score: 78 }, { name: "Alice", score: 85 }, { name: "Bob", score: 92 }]

// Sorting students by name in alphabetical order
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students); // Output: [{ name: "Alice", score: 85 }, { name: "Bob", score: 92 }, { name: "Charlie", score: 78 }]    

//natural sorting - lexicographical / string sorting
let mixedArray = ["10", "2", "1", "20"];
console.log(mixedArray.sort()); // Output: ["1", "10", "2", "20"] - sorts as strings, not numbers   

//custom sorting - using a compare function
let customNumbers = [10, 2, 1, 20];
customNumbers.sort((a, b) => a - b);
console.log(customNumbers); // Output: [1, 2, 10, 20] - sorts as numbers    

//proper sorting , ascending order
let properNumbers = [10, 2, 1, 20];
properNumbers.sort((a, b) => a - b);
console.log(properNumbers); // Output: [1, 2, 10, 20] - sorts as numbers in ascending order

//proper sorting , descending order
let properNumbersDesc = [10, 2, 1, 20];
properNumbersDesc.sort((a, b) => b - a);
console.log(properNumbersDesc); // Output: [20, 10, 2, 1] - sorts as numbers in descending order

