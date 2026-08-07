// //without function - repeated logic

let score1 = 100;
let reuslt = score1 > 50 ? 'pass' : 'fail';
console.log(reuslt);

let score2 = 40;
let reuslt2 = score2 > 50 ? 'pass' : 'fail';
console.log(reuslt2);

//define
function getResult(score) {
    return score > 50 ? 'pass' : 'fail';
}   

//calling
getResult(100); //pass
getResult(40); //fail



