function greet1(name) {
    return `Hello. ${name}`;
}   

//Function as Expression

const greet2 = function(name1) {    
    return `Hello. ${name1}`;
}
//Arrow Function
const greet3 = (name2) => {
    return `Hello. ${name2}`;
}
//Arrow Function - single line return
const greet4 = (name3) => `Hello. ${name3}`; //single line return


console.log(greet1('John')); // Hello John
console.log(greet2('John')); // Hello John
console.log(greet3('John')); // Hello John
console.log(greet4('John')); // Hello John

//multiline arror function
const greet5 = (name4) => {
    let greeting = `Hello. ${name4}`;
    return greeting;
}       
console.log(greet5('John')); // Hello John

//multiline arror function
const getresult = (score) => {
    if(score>70) return 'pass';
    else return 'fail'; 
}
console.log(getresult(80)); // pass
console.log(getresult(60)); // fail

