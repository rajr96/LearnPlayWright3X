// nested ternary operator
let age = 20;
let canVote = age >= 18 ? (age >= 21 ? "Yes, you can vote and drink" : "Yes, you can vote but not drink") : "No, you cannot vote";
console.log(canVote); // Output: Yes, you can vote but not drink

let statusCode = 404;
let message = statusCode === 200 ? "OK" : (statusCode === 404 ? "Not Found" : "Unknown Status");
console.log(message); // Output: Not Found

let temo = 30;
let weather = temo > 30 ? "Hot" : (temo >= 20 ? "Warm" : "Cold");
console.log(weather); // Output: Warm   
