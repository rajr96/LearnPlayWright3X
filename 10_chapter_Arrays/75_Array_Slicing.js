//slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included
//returns a new array.
//does not modify the original array.
//start index is inclusive, end index is exclusive.
//array indexing starts at 0.
//if 'end' is omitted, slice extracts through the end of the sequence (arr.length).
//if 'start' is negative, it is treated as 'arr.length + start'.
//if 'end' is negative, it is treated as 'arr.length + end'.
//if 'start' is greater than or equal to 'end', an empty array is returned.
//if 'start' is greater than or equal to the length of the array, an empty array is returned.
//if 'end' is greater than the length of the array, it is treated as 'arr.length'.



// Array_Slicing
let numbers = [1, 2, 3, 4, 5];  
console.log(numbers.slice(1, 3)); // Output: [2, 3] - extracts elements from index 1 to 2
console.log(numbers.slice(2)); // Output: [3, 4, 5] - extracts elements from index 2 to the end
console.log(numbers.slice(-2)); // Output: [4, 5] - extracts the last two elements
console.log(numbers.slice(1, -1)); // Output: [2, 3, 4] - extracts elements from index 1 to the second last element
console.log(numbers.slice(0, 10)); // Output: [1, 2, 3, 4, 5] - extracts elements from index 0 to the end (end index exceeds array length)  
console.log(numbers.slice(3, 1)); // Output: [] - start index is greater than end index, returns an empty array
console.log(numbers.slice(5, 10)); // Output: [] - start index is equal to array length, returns an empty array 
console.log(numbers.slice(-10, -5)); // Output: [] - start index is less than negative array length, returns an empty array


console.assert(numbers.slice(1, 3).toString() === [2, 3].toString(), "Test Case 1 Failed");
console.assert(numbers.slice(2).toString() === [3, 4, 5].toString(), "Test Case 2 Failed");
console.assert(numbers.slice(-2).toString() === [4, 5].toString(), "Test Case 3 Failed");   
console.assert(numbers.slice(1, -1).toString() === [2, 3, 4].toString(), "Test Case 4 Failed");
console.assert(numbers.slice(0, 10).toString() === [1, 2, 3, 4, 5].toString(), "Test Case 5 Failed");
console.assert(numbers.slice(3, 1).toString() === [].toString(), "Test Case 6 Failed");
console.assert(numbers.slice(5, 10).toString() === [].toString(), "Test Case 7 Failed");
console.assert(numbers.slice(-10, -5).toString() === [].toString(), "Test Case 8 Failed");


