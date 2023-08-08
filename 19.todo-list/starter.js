const todoList = document.querySelector(".todo-list");
// query data from local storage
let todoArr = JSON.parse(localStorage.getItem("todoList")) || [];
// localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
const todoForm = document.querySelector(".todo-form");
if (Array.isArray(todoArr) && todoArr.length > 0) {
    todoArr.forEach((i) => addTemplate(i));
}
// function add template
function addTemplate(title) {
    const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english">`;
    todoList.insertAdjacentHTML("beforeend", template);
}
// create todo item
todoForm.addEventListener("submit", submitItem);
function submitItem(e) {
    e.preventDefault();
    let todoContent = this.elements["todo"].value;
    if (todoContent === "") return;
    addTemplate(todoContent);
    todoArr.push(todoContent);
    localStorage && localStorage.setItem("todoList", JSON.stringify(todoArr));
    // save to localStorage
    this.elements["todo"].value = "";
}
// remove todo item
todoList.addEventListener("click", removeItem);
function removeItem(e) {
    if (e.target.matches(".todo-remove")) {
        // remove in dom
        const item = e.target.parentNode;
        item.parentNode.removeChild(item);
        // remove in local storage
        let contentTodo = e.target.previousElementSibling.textContent;
        const index = todoArr.findIndex((i) => i === contentTodo);
        todoArr.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todoArr));
    }
}
