// localStorage.setItem("key", "value"): add key into local storage
localStorage.setItem("cursed technique", "domain expanse");
// localStorage.getItem("key")
console.log(localStorage.getItem("cursed technique"));
// // localStorage.removeItem("key")
// localStorage.removeItem("cursed technique");
// // localStorage.clear(): remove all key
// localStorage.clear();
// add and query array in local storage
let arr = [1, 2, 3, 4, 5];
// using JSON.stringify to add arry into local storage
localStorage.setItem("list", JSON.stringify(arr));
// query array from local storage
const newarr = JSON.parse(localStorage.getItem("list"));
console.log(newarr);
