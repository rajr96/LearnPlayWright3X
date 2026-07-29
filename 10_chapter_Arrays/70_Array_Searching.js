//searching

let result = ["Pass", "Fail", "Pass", "Fail", "Pass"];

console.log(result.indexOf("Fail")); // Output: 1
console.log(result.lastIndexOf("Fail")); // Output: 3

// indexOf() returns the first index 
 
result.indexOf("Pass"); // Output: 0
result.indexOf("Fail"); // Output: 1
result.indexOf("skip"); // Output: -1


result.lastIndexOf("Pass"); // Output: 4
result.lastIndexOf("Fail"); // Output: 3

//includes - returns boolean
result.includes("Pass"); // Output: true
result.includes("Fail"); // Output: true
result.includes("skip"); // Output: false
result.includes("error"); // Output: false



//Array searching
const browsers = ["Chrome", "Firefox", "Safari", "Edge"];

//IndexOf method
console.log(browsers.indexOf("Edge")); // Output: 3

//Includes method
console.log(browsers.includes("Firefox")); // Output: true