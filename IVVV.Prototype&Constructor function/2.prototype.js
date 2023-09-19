//! syntax:
nameOfObject.prototype.nameOfPrototype = function (params) {};
//! example:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Define a method using the constructor's prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};
//! Accessing Methods and Properties from .prototype:
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.sayHello(); // Output: Hello, my name is John.
person2.sayHello(); // Output: Hello, my name is Jane.
console.log("🚀 ~ person1:", person1);
