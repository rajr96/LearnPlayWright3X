function sayHello(name) {
    console.log(name);
}

//calling
sayHello('John'); // John
sayHello("Jane"); // Jane

//there are four types of functions which exist(js)
//1. no return type. No arguments
function greet() {
    console.log('Hello');
}

//1.1. no return type. With arguments
function greetWithName(name) {
    console.log('Hello ' + name);
}   

//2. return type. No arguments
function getGreeting() {
    return 'Hello';
}

//2.1. return type. With arguments
function getGreetingWithName(name) {
    return 'Hello ' + name;
}   

//calling
greet();
greetWithName('John'); // Hello John

//3. with argument, no return type
function greetWithAge(name, age) {
    console.log('Hello ' + name + ', you are ' + age + ' years old');
}   

//3.1. with argument, with return type
function getGreetingWithAge(name, age) {
    return 'Hello ' + name + ', you are ' + age + ' years old';
}

//calling
greetWithAge('John', 30);
getGreetingWithAge('Jane', 25); // Hello Jane, you are 25 years old


//4. with argument, with return type
function getGreetingWithDetails(name, age, city) {
    return 'Hello ' + name + ', you are ' + age + ' years old and live in ' + city;
}

//calling
getGreetingWithDetails('John', 30, 'New York'); // Hello John, you are 30 years old and live in New York

//4.1. with argument, with return type
function getGreetingWithDetailsAndCountry(name, age, city, country) {
    return 'Hello ' + name + ', you are ' + age + ' years old and live in ' + city + ', ' + country;
}   

//calling
getGreetingWithDetailsAndCountry('Jane', 25, 'Los Angeles', 'USA'); // Hello Jane, you are 25 years old and live in Los Angeles, USA



//with type script we can define the type of arguments and return type of function
function greetWithAgeTS(name: string, age: number): void {
    console.log('Hello ' + name + ', you are ' + age + ' years old');
}

function getGreetingWithAgeTS(name: string, age: number): string {
    return 'Hello ' + name + ', you are ' + age + ' years old';
}


