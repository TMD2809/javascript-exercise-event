const todoList = document.querySelector(".todo-list");
const todoArr = [];
const todoForm = document.querySelector(".todo-form");
todoForm.addEventListener("submit", submitItem);
function submitItem(e) {
    e.preventDefault();
    let todoContent = this.elements["todo"].value;
    const template = `<div class="todo-item">
        <span class="todo-text">${todoContent}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english">`;
    if (todoContent === "") return;
    todoList.insertAdjacentHTML("afterbegin", template);
    // todoArr = todoArr.push(todoContent);
    // localStorage.setItem("todoList", JSON.stringify(todoArr));
    this.elements["todo"].value = "";
}
