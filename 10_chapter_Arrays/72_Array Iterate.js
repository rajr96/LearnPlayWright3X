//Array Iterate
let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// for (let i = 0; i < tests.length; i++) { 
//  console.log(`Test ${index}: ${test}`);
// }


//for...of (cleanest for values)
for (let test of tests) {
    console.log(test);
}   
console.log("----");

//forEach (no return value)
tests.forEach((test, index) => {
    console.log(`Test ${index}: ${test}`);
});
