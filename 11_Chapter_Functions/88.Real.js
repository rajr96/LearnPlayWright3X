//Function as declaration

function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log('RRequest is fine');
    }
}

//Function as expression
const validateStatusCode1 = function(status) {
    if (status >= 200 && status < 300) {
        console.log('RRequest is fine');
    }
}

//function as arrow function
const validateStatusCode2 = (status) => {
    if (status >= 200 && status < 300) {
        console.log('RRequest is fine');
    }
}

validateStatusCode(200); //Request is fine
validateStatusCode1(200); //Request is fine
validateStatusCode2(200); //Request is fine 
