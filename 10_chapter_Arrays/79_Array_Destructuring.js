//Array_Destructuring
let [first, second, third] = [10,20,30];
console.log(first); 
console.log(second);
console.log(third);

//using spread
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [30, 40, 50]  
