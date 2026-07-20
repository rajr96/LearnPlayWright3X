// rule of thumb: use === and !== instead of == and !=
// == and != are confusing because they do type coercion
// ===  strict equality operator, checks for both value and type (no type coercion)

//  ==  loose equality operator, checks for value only (performs type coercion)
//  !=  loose inequality operator, checks for value only (performs type coercion)
//  !==  strict inequality operator, checks for both value and type (no type coercion)  
// Example of confusing comparison
let a = 5;
console.log(a == '5');  // true, because of type coercion
console.log(a === '5'); // false, because different types
console.log(a != '5');  // false, because of type coercion
console.log(a !== '5'); // true, because different types    

console.log("" == 0); // true, because of type coercion
console.log("" === 0); // false, because different types        
console.log("" != 0);  // false, because of type coercion

// -----------2. null and undefined comparison
console.log(null == undefined); // true, because of type coercion
console.log(null === undefined);    // false, because different types
console.log(null != undefined);  // false, because of type coercion
console.log(null !== undefined); // true, because different types
console.log(null == 0); // false, because null is only equal to undefined
console.log(null === 0); // false, because different types
console.log(null != 0); // true, because null is only equal to undefined
console.log(null !== 0); // true, because different types
console.log(undefined == 0); // false, because undefined is only equal to null
console.log(undefined === 0); // false, because different types
console.log(undefined != 0); // true, because undefined is only equal to null
console.log(undefined !== 0); // true, because different types  
console.log(null > 0); // false, because null is only equal to undefined
console.log(null >= 0); // true, because null is only equal to undefined
console.log(undefined > 0); // false, because undefined is only equal to null      
console.log(undefined >= 0); // false, because undefined is only equal to null
console.log(null < 0); // false, because null is only equal to undefined
console.log(null <= 0); // true, because null is only equal to undefined        
