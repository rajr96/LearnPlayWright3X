//Type 1 - No parameters and no return -> final result is undefined

//define
function greet() {
    console.log('Hello');
}   

//no parm and no return (void)

//calling
greet(); //Hello
greet(); //Hello
greet(); //Hello


let output = greet(); //Hello
console.log(output); //undefined

function openBrowser() {
    console.log('Opening browser');
}

//difference between console.log and return
//console.log =  print to terminal /devtools (side effect, for humans)
//return = send value back to the caller (data flow, for code).

