//Array
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

