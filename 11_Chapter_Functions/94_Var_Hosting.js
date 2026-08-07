console.log(greeting); //undefined
var greeting = "Hello World";
console.log(greeting); //Hello World

//behind the scenes, the JS engine does this
//var greeting; //hoisted with undefined
//console.log(greeting); //undefined
//greeting = "Hello World"; //assignment happens during execution phase
//console.log(greeting); //Hello World


