//! bind:
// use to bind 'this'
//! example*
//* Create an object
const person = {
    firstName: "John",
    lastName: "Doe",
};

//* Define a function that uses 'this'
function greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

//* Using bind to set 'this' for the function
const boundGreet = greet.bind(person);

//* Now, when we invoke boundGreet, it will use 'person' as 'this'
boundGreet(); // Output: Hello, John Doe!
//! use bind to bind function:
//* not use bind:
function log(level, time, message) {
    console.log(`${level} ${time} ${message}`);
}
function logErrToday(message) {
    log("Error", "Today", message);
}
logErrToday("Server OK!");
//* use bind:
function log(level, time, message) {
    console.log(`${level} ${time} ${message}`);
}
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");
