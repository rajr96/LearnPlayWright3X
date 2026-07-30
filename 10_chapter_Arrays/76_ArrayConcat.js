// ArrayConcat
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

//spread operator
let concatenatedArray2 = [...array1, ...array2];
console.log(concatenatedArray2); // Output: [1, 2, 3, 4, 5, 6]

//join() - joins all elements of an array into a string
let joinedString = concatenatedArray.join(", ");
console.log(joinedString); // Output: "1, 2, 3, 4, 5, 6"
