// Type operator
let num = 42;
console.log(typeof num); // Output: number

let str = "Hello";
console.log(typeof str); // Output: string

    let bool = true;
console.log(typeof bool); // Output: boolean

let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // Output: object  

let arr = [1, 2, 3];
console.log(typeof arr); // Output: object (arrays are a type of object in JavaScript)  

let func = function() { return "Hello"; };
console.log(typeof func); // Output: function   

let und = undefined;
console.log(typeof und); // Output: undefined   

let nul = null;
console.log(typeof nul); // Output: object (this is a known quirk in JavaScript)    

let sym = Symbol("id");
console.log(typeof sym); // Output: symbol

let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntNum); // Output: bigint    

let nanValue = NaN;
console.log(typeof nanValue); // Output: number (NaN is considered a number in JavaScript)  

let infinityValue = Infinity;
console.log(typeof infinityValue); // Output: number (Infinity is considered a number in JavaScript)

let negativeInfinityValue = -Infinity;
console.log(typeof negativeInfinityValue); // Output: number (Negative Infinity is considered a number in JavaScript)

let date = new Date();
console.log(typeof date); // Output: object (Date is a built-in object in JavaScript)

let regex = /ab+c/;
console.log(typeof regex); // Output: object (RegExp is a built-in object in JavaScript)

let error = new Error("Something went wrong");
console.log(typeof error); // Output: object (Error is a built-in object in JavaScript)

let map = new Map();
console.log(typeof map); // Output: object (Map is a built-in object in JavaScript)

let set = new Set();
console.log(typeof set); // Output: object (Set is a built-in object in JavaScript)

let weakMap = new WeakMap();    
console.log(typeof weakMap); // Output: object (WeakMap is a built-in object in JavaScript)

let weakSet = new WeakSet();
console.log(typeof weakSet); // Output: object (WeakSet is a built-in object in JavaScript) 

let promise = new Promise((resolve, reject) => {
    resolve("Success");
});
console.log(typeof promise); // Output: object (Promise is a built-in object in JavaScript) 

let asyncFunction = async function() {
    return "Hello";
};
console.log(typeof asyncFunction); // Output: function (async functions are a type of function in JavaScript)


