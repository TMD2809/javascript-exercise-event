const dropdownButton = document.querySelector(".dropdown__select");
dropdownButton.addEventListener("click", showDropdown);
const dropdownCaret = document.querySelector(".dropdown__caret");
function showDropdown(e) {
    const dropdownList = e.target.nextElementSibling;
    if (dropdownList) {
        dropdownList.classList.toggle("show");
        dropdownCaret.classList.toggle("fa-caret-down");
        dropdownCaret.classList.toggle("fa-caret-up");
    }
}
const dropdownBox = [...document.querySelectorAll(".dropdown__item")];
dropdownBox.forEach;
