// // //Var
// // var a = 10;
// // console.log(a); //10
// // //Var is function scoped
// // function varTest() {
// //     var a = 20;
// //     console.log(a); //20
// //     if(true) {
// //         var a = 30;
// //         console.log(a); //30
// //     }
// //     console.log(a); //30
// // }
// // varTest(); //30


// // Let - Block scoped
// let b = 20;
// console.log(b);

// function letTest() {
//     console.log("hello world"); //10
//     let b = 30; //Local Scope
//     console.log(b);//30
//     if (true) {
//         let b = 5;
//         console.log(b); //5
//     }
//     console.log("let ->", b); //30
// }


// //calling letTest(); //ReferenceError: Cannot access 'b' before initialization
// letTest(); //ReferenceError: Cannot access 'b' before initialization
// console.log(b); //20

// //let does not allow you to have a re-declataion.
let a = 10;
let a = 10;

// vat allow you to have a redeclaration.
var a = 10;
var a = 100;



// Const - Block scoped
const c = 10;
console.log(c); //10

const a = [1, 2, 3, 4, 5];
a.push(6);
console.log(a); // [1, 2, 3, 4, 5, 6]   

function constTest() {
    const d = 10;
    console.log(d); //10
}