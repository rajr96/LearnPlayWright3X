//shallow copy 
//original array will not change if we change the copied array

//Array_Copy
let originalArray = [1, 2, 3, 4, 5];
//Using slice() to create a shallow copy
let copiedArray1 = originalArray.slice();
console.log(copiedArray1); // Output: [1, 2, 3, 4, 5]

//Using spread operator to create a shallow copy
let copiedArray2 = [...originalArray];
console.log(copiedArray2); // Output: [1, 2, 3, 4, 5]

//using slice() to copy a portion of the array
let partialCopy = originalArray.slice(1, 4);
console.log(partialCopy); // Output: [2, 3, 4]  

let partialCopy2 = originalArray.slice();
console.log(partialCopy2); // Output: [1, 2, 3, 4, 5]
//using concat() to create a shallow copy
let copiedArray3 = [].concat(originalArray);
console.log(copiedArray3); // Output: [1, 2, 3, 4, 5]

//Using Array.from() to create a shallow copy
let copiedArray4 = Array.from(originalArray);
console.log(copiedArray4); // Output: [1, 2, 3, 4, 5]

//Using structuredClone() to create a deep copy (for nested arrays)
let nestedArray = [1, 2, [3, 4], 5];
let deepCopiedArray = structuredClone(nestedArray);
console.log(deepCopiedArray); // Output: [1, 2, [3, 4], 5]

//Modifying the original nested array to show that deep copy is independent
nestedArray[2][0] = 99;
console.log(nestedArray); // Output: [1, 2, [99, 4], 5]
console.log(deepCopiedArray); // Output: [1, 2, [3, 4], 5] - remains unchanged



//deep copy


let originalNestedArray = [1, 2, [3, 4], 5];
//Using structuredClone() to create a deep copy
let deepCopiedNestedArray = structuredClone(originalNestedArray);
console.log(deepCopiedNestedArray); // Output: [1, 2, [3, 4], 5]

let copiedNestedArray = structuredClone(originalNestedArray);
//Modifying the original nested array to show that deep copy is independent
originalNestedArray[2][0] = 99;
console.log(originalNestedArray); // Output: [1, 2, [99, 4], 5]
console.log(deepCopiedNestedArray); // Output: [1, 2, [3, 4], 5] - remains unchanged

let copiedNestedArray2 = structuredClone(originalNestedArray);
//Modifying the copied nested array to show that deep copy is independent
copiedNestedArray2[2][1] = 88;
console.log(originalNestedArray); // Output: [1, 2, [99, 4], 5] - remains unchanged
console.log(copiedNestedArray2); // Output: [1, 2, [99, 88], 5] - modified independently

let copiedNestedArray3 = structuredClone(originalNestedArray);
//Modifying the copied nested array to show that deep copy is independent
copiedNestedArray3[2][0] = 77;
console.log(originalNestedArray); // Output: [1, 2, [99, 4], 5] - remains unchanged
console.log(copiedNestedArray3); // Output: [1, 2, [77, 4], 5] - modified independently