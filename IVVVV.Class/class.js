//! CLASS
class Person {
    constructor(name) {
        this.name = name;
    }
    //* use this instead of prototype
    getName() {
        console.log(this.name);
    }
    setName(newName) {
        this.name = newName;
    }
}
const holmes = new Person("Holmes");
holmes.getName();
holmes.setName("Doyle");
holmes.getName();
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
// function passClass(aClass) {
//     return new aClass();
// }
// const itABomm = passClass(
//     class {
//         sayHello() {
//             alert("Boooommm!!!");
//         }
//     }
// );
// itABomm.sayHello();
//! Static method in class
// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//     static compare(a, b) {
//         return a.date - b.date;
//     }
// }
// let articles = [
//     new Article("HTML", new Date(2023, 5, 1)),
//     new Article("CSS", new Date(2023, 2, 1)),
//     new Article("JS", new Date(2023, 3, 1)),
// ];
// articles.sort(Article.compare);
// console.log(articles[0]);
// console.log(articles[0].title);
//! static property
// class Item {
//     constructor(name) {
//         this.name = name;
//         this.constructor.count++; //||this.constructor.propertyName
//     }
//     static count = 0;
//     static getCount() {
//         return Item.count; //|| className.propertyName
//     }
// }
// const count1 = new Item("count1");
// const count2 = new Item("count2");
// console.log(Item.count);
//! super & extend in class
