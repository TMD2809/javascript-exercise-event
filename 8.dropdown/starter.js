const dropdownButton = document.querySelector(".dropdown__select");
const dropdownContent = document.querySelector(".dropdown__selected");
const dropdownCaret = document.querySelector(".dropdown__caret");
const dropdownList = document.querySelector(".dropdown__list");
dropdownButton.addEventListener("click", showDropdown);
function showDropdown(e) {
    if (dropdownList) {
        dropdownList.classList.toggle("show");
        dropdownCaret.classList.toggle("fa-caret-down");
        dropdownCaret.classList.toggle("fa-caret-up");
    }
}
const dropdownBox = [...document.querySelectorAll(".dropdown__item")];
dropdownBox.forEach((item) => item.addEventListener("click", replaceTitle));
function replaceTitle(e) {
    const content = e.target.querySelector(".dropdown__text").textContent;
    dropdownContent.textContent = content;
    dropdownList.classList.remove("show");
    dropdownCaret.classList.toggle("fa-caret-down");
    dropdownCaret.classList.toggle("fa-caret-up");
}
