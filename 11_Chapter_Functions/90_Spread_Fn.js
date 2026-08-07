function add(a,b,c) {
    return a + b + c;
}       
let num = [10, 20, 30];
//Spread operator
console.log(add(...num)); //60
//---

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 404, 500, 403];
hasError(...responseCodes); //true  
