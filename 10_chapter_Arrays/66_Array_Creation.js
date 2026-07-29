//Array Literal (Preferred)
const browsers = ["Chrome", "Firefox", "Safari", "Edge"];   

//Array Constructor (Not Preferred)
const browsers2 = new Array("Chrome", "Firefox", "Safari", "Edge"); 

let scores = new Array(5); // Creates an array with 5 empty slots
let scores2 = new Array(5, 10, 15); // Creates an array with elements 5, 10, and 15
let scores3 = new Array(5, 10, 15, 20); // Creates an array with elements 5, 10, 15, and 20

let test = Array.of(1, 2, 3); // Creates an array with elements 1, 2, and 3
console.log(test); // Output: [1, 2, 3]

//Array.from
let str = "Hello";
let chars = Array.from("Hello"); // Creates an array from a string
console.log(chars); // Output: ["H", "e", "l", "l", "o"]