const person = {
    lastName: "Holmes",
    firstName: "Sherlock",
};
function sayHello(str1, str2) {
    console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}
//! call invoke immediately - no-need to console.log
sayHello.call(person, "The", "detective");
//! call invoke immediately - no-need to console.log and params pass in by array
sayHello.apply(person, ["The", "detective"]);
