
//Datatypes

// string - collection of characters
let name = "John Doe";
console.log(name); // Output: John Doe

//number - collection of digits 
let age = 30;
console.log(age); // Output: 30

//bigint - collection of digits for very large integers
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n

//boolean - can only be true or false       
let isStudent = true;
console.log(isStudent); // Output: true 

//undefined - a variable that has been declared but not assigned a value    
let address;
console.log(address); // Output: undefined

//null - represents the intentional absence of any object value
let city = null;
console.log(city); // Output: null

//symbol - a unique and immutable primitive value
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)

//object -  collection of properties, where each property is a key-value pair
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};
console.log(person); // Output: { name: 'John Doe', age: 30, isStudent: true }

//array - a collection of elements, which can be of any data type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//function - a block of code designed to perform a particular task
function greet() {
    return "Hello, World!";
}

console.log(greet()); // Output: Hello, World!  

