//Array_Checking


//check if soething is an array
let result = Array.isArray([1, 2, 3]); // true
let result1 = Array.isArray("Hello"); // false
console.log(result); // Output: true
console.log(result1); // Output: false




let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // Output: true


//every() - tests whether all elements in the array pass the test implemented by the provided function
[80, 90, 85].every(s => s >= 80); // true
[80, 60, 85].every(s => s >= 80); // false


//some() - tests whether at least one element in the array passes the test implemented by the provided function
[80, 90, 85].some(s => s >= 90); // true
[80, 60, 85].some(s => s >= 90); // false   