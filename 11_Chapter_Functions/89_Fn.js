//immediately invoked function expression (IIFE)
//They dont need to be called

function name1() {
    console.log('Hello John');
}
name1(); //Hello John

(function name2() {
    console.log('Hello John');
})();

//IIFW
(function name3() {
    console.log('Hello John');
})();


//Arrow function IIFE
(() => {
    console.log('Hello John');
})();   

//IIFE with arguments
(function name4(name) {
    console.log('Hello ', name);
})('John');

//Arrow function IIFE with arguments
((name) => {
    console.log('Hello ', name);
})('John');

//IIFE with return type
let result = (function name5(a, b) {
    return a + b;
})(10, 20);
console.log(result); //30   
