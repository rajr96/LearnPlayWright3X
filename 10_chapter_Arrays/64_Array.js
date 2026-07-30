//Array
//push(x) - adds an element to the end of the array
//pop() - removes the last element from the array
//unshift(x) - adds an element to the beginning of the array
//shift() - removes the first element from the array
//splice(start, deleteCount, item1, item2, ...) - adds/removes elements from the array
//sort() - sorts the elements of the array in place and returns the sorted array
//reverse() - reverses the order of the elements in the array
//indexOf(x) - returns the first index at which a given element can be found in the array, or -1 if it is not present
//includes(x) - determines whether an array includes a certain element, returning true or false as appropriate
//join(separator) - joins all elements of an array into a string, separated by the specified separator
//slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)     
//concat(array1, array2, ...) - merges two or more arrays and returns a new array
//find(callback) - returns the value of the first element in the array that satisfies the provided testing function
//findIndex(callback) - returns the index of the first element in the array that satisfies the provided testing function
//filter(callback) - creates a new array with all elements that pass the test implemented by the provided function
//map(callback) - creates a new array with the results of calling a provided function on every element in the calling array
//reduce(callback, initialValue) - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
//reduceRight(callback, initialValue) - applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
//some(callback) - tests whether at least one element in the array passes the test implemented by the provided function
//every(callback) - tests whether all elements in the array pass the test implemented by the provided function
//flat(depth) - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth  
//flatMap(callback) - first maps each element using a mapping function, then flattens the result into a new array
//Array Iterate
//forEach(callback) - executes a provided function once for each array element
//for...of - iterates over the values of an iterable object (like an array)
//for...in - iterates over the keys of an object (like an array)
//Array Destructuring
//const [a, b] = array; - assigns the first two elements of the array to variables a and b
//const [a, b, ...rest] = array; - assigns the first two elements of the array to variables a and b, and the rest of the elements to an array called rest
//const [a, , c] = array; - assigns the first and third elements of the array to variables a and c, skipping the second element
//const [a, b] = array; - assigns the first two elements of the array to variables a and b
//const [a, b, ...rest] = array; - assigns the first two elements of the array to variables a and b, and the rest of the elements to an array called rest
//const [a, , c] = array; - assigns the first and third elements of the array to variables a and c, skipping the second element
//const [a, b] = array; - assigns the first two elements of the array to variables a and b
//const [a, b, ...rest] = array; - assigns the first two elements of the array to variables a and b, and the rest of the elements to an array called rest
//const [a, , c] = array; - assigns the first and third elements of the array to variables a and c, skipping the second element
//const [a, b] = array; - assigns the first two elements of the array to variables a and b
//const [a, b, ...rest] = array; - assigns the first two elements of the array to variables a and b, and the rest of the elements to an array called rest
//const [a, , c] = array; - assigns the first and third elements of the array to variables a and c, skipping the second element
//const [a, b] = array; - assigns the first two elements of the array to variables a and b
//const [a, b, ...rest] = array; - assigns the first two elements of the array to variables a and b, and the rest of the elements to an array called rest
//const [a, , c] = array; - assigns the first and third elements of the array to variables a and c, skipping the second element 



// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log(browsers[0]); // Output: Chrome
console.log(browsers.at(-1)); // Output: Edge
console.log(browsers.length); // Output: 4


//push(x) - adds an element to the end of the array
browsers.push("Opera");
console.log(browsers); // Output: ["Chrome", "Firefox", "Safari", "Edge", "Opera"]  

//pop() - removes the last element from the array
browsers.pop();
console.log(browsers); // Output: ["Chrome", "Firefox", "Safari", "Edge"]       

//unshift(x) - adds an element to the beginning of the array
browsers.unshift("Brave");
console.log(browsers); // Output: ["Brave", "Chrome", "Firefox", "Safari", "Edge"]  

//shift() - removes the first element from the array
browsers.shift();
console.log(browsers); // Output: ["Chrome", "Firefox", "Safari", "Edge"]   

//splice(start, deleteCount, item1, item2, ...) - adds/removes elements from the array
browsers.splice(1, 1, "Opera", "Brave");
console.log(browsers); // Output: ["Chrome", "Opera", "Brave", "Safari", "Edge"]    

//sort() - sorts the elements of the array in place and returns the sorted array
browsers.sort();
console.log(browsers); // Output: ["Brave", "Chrome", "Edge", "Opera", "Safari"]    

//reverse() - reverses the order of the elements in the array
browsers.reverse();
console.log(browsers); // Output: ["Safari", "Opera", "Edge", "Chrome", "Brave"]    

//indexOf(x) - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(browsers.indexOf("Edge")); // Output: 2 

//includes(x) - determines whether an array includes a certain element, returning true or false as appropriate
console.log(browsers.includes("Firefox")); // Output: false 

//join(separator) - joins all elements of an array into a string, separated by the specified separator
console.log(browsers.join(", ")); // Output: "Safari, Opera, Edge, Chrome, Brave"   

//slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
const newBrowsers = browsers.slice(1, 4);
console.log(newBrowsers); // Output: ["Opera", "Edge", "Chrome"]

