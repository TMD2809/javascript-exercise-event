//! CLASS
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this.name);
//     }
//     setName(newName) {
//         this.name = newName;
//     }
// }
// const holmes = new Person("Holmes");
// holmes.getName();
// holmes.setName("Doyle");
// holmes.getName();
//! GETTER SETTER
// class Person1 {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         return (this._name = newName);
//     }
// }
// const TMD = new Person1("TMD");
// console.log("🚀 ~ TMD.name:", TMD.name);
// TMD.name = "Hacker";
// console.log("🚀 ~ TMD.name:", TMD.name);
//! CLASS EXPRESSION
//* Similar to function expression, class has it and not hoisting too
//const TMD = new Student("TMD"); //* Student was called before declare will cause error:Uncaught ReferenceError: Cannot access 'Student' before initialization
// let Student = class {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         return (this._name = newName);
//     }
// };
// console.log("🚀 ~ TMD.name:", TMD.name);
//! Class passed in function as argument
function passClass(aClass) {
    return new aClass();
}
const itABomm = passClass(
    class {
        sayHello() {
            alert("Boooommm!!!");
        }
    }
);
itABomm.sayHello();
