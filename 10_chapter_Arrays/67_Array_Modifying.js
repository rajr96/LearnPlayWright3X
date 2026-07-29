//Array accessing and modifying methods

const browsers = ["Chrome", "Firefox", "Safari", "Edge"];

//Accessing elements
console.log(browsers[0]); // Output: Chrome
console.log(browsers.at(-1)); // Output: Edge

//Modifying elements
browsers[1] = "Opera";
console.log(browsers); // Output: ["Chrome", "Opera", "Safari", "Edge"]

//Adding elements
browsers.push("Brave"); 
console.log(browsers); // Output: ["Chrome", "Opera", "Safari", "Edge", "Brave"]

//Length of the array
console.log(browsers.length); // Output: 5

//Removing elements
browsers.pop(); 
console.log(browsers); // Output: ["Chrome", "Opera", "Safari", "Edge"]

//Adding elements at the beginning
browsers.unshift("Brave");
console.log(browsers); // Output: ["Brave", "Chrome", "Opera", "Safari", "Edge"]

//Removing elements from the beginning
browsers.shift(); 
console.log(browsers); // Output: ["Chrome", "Opera", "Safari", "Edge"]

//Splice method to add/remove elements
browsers.splice(1, 1, "Firefox", "Brave");
console.log(browsers); // Output: ["Chrome", "Firefox", "Brave", "Safari", "Edge"]

//Sort method
browsers.sort();
console.log(browsers); // Output: ["Brave", "Chrome", "Edge", "Firefox", "Safari"]

//Reverse method
browsers.reverse();
console.log(browsers); // Output: ["Safari", "Firefox", "Edge", "Chrome", "Brave"]

//IndexOf method
console.log(browsers.indexOf("Edge")); // Output: 2

//Includes method
console.log(browsers.includes("Firefox")); // Output: true

//Join method
console.log(browsers.join(", ")); // Output: "Safari, Firefox, Edge, Chrome, Brave"

//Slice method
const newBrowsers = browsers.slice(1, 4);
console.log(newBrowsers); // Output: ["Firefox", "Edge", "Chrome"]

//add to the end of the array
browsers.push("Vivaldi");
console.log(browsers); // Output: ["Safari", "Firefox", "Edge", "Chrome", "Brave", "Vivaldi"]

//remove from the end of the array
browsers.pop();
console.log(browsers); // Output: ["Safari", "Firefox", "Edge", "Chrome", "Brave"]

//add to the beginning of the array
browsers.unshift("Vivaldi");
console.log(browsers); // Output: ["Vivaldi", "Safari", "Firefox", "Edge", "Chrome", "Brave"]

//remove from the beginning of the array
browsers.shift();
console.log(browsers); // Output: ["Safari", "Firefox", "Edge", "Chrome", "Brave"]

