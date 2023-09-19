//! syntax:
function functionName(arguments, arguments1) {
    this.arguments;
    this.arguments1;
}
//! create new object by using constructor function
const newObject = new functionName(newArguments, newArguments1);
const newObject1 = new functionName(newArguments, newArguments1);
//! using method in constructor function:
function Person(name, age) {
    this.name = name;
    this.age = age;
    //|| Define a method using the constructor's prototype:
    this.calculateBirthYear = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    };
}
const Holmes = new Person("Holmes", 39);
console.log("🚀 ~ Holmes:", Holmes);
