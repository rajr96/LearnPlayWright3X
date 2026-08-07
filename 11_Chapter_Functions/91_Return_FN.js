function getStatuscode(code) {
    if(code >= 200 && code < 300) return "Success";
    else if(code >= 400 && code < 500) return "Client Error";
    else if(code >= 500 && code < 600) return "Server Error";
    else return "Unknown Status Code";  
}
getStatuscode(200); //Success
getStatuscode(404); //Client Error
getStatuscode(500); //Server Error  
getStatuscode(100); //Unknown Status Code


//return nothing  -> unddefined
function logTest(name) {
    console.log('Hello ', name);
}
logTest("Hi this is a log test"); //Hello Hi this is a log test

//return array
function aaa() {
    return [1, 2, 3, 5, 3, 4, 5];
//return object
function bbb() {
    return {name: "John", age: 30};
}


//Hoisting Vs TDZ (Temporal Dead Zone)
//Hoisting
console.log(hoistTest()); //Hello Hoisting
function hoistTest() {
    return "Hello Hoisting";
}

//TDZ
console.log(tdzTest()); //ReferenceError: Cannot access 'tdzTest' before initialization
const tdzTest = function() {
    return "Hello TDZ";
};
