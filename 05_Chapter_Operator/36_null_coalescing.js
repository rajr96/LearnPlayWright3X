// null coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

// Example 1: Using null coalescing operator with null value    
let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;

console.log(displayName); // Output: Guest

// Example 2: Using null coalescing operator with undefined value
let age;
let defaultAge = 18;
let displayAge = age ?? defaultAge; 
console.log(displayAge); // Output: 18

// Example 3: Using null coalescing operator with a non-null value
let city = "New York";
let defaultCity = "Los Angeles";
let displayCity = city ?? defaultCity;
console.log(displayCity); // Output: New York   

// Example 4: Using null coalescing operator with a falsy value (0)
let score = 0;
let defaultScore = 10;
let displayScore = score ?? defaultScore;
console.log(displayScore); // Output: 0 (because 0 is not null or undefined)    

