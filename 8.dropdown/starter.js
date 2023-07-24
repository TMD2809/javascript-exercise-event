const dropdownButton = document.querySelector(".dropdown__select");
const dropdownContent = document.querySelector(".dropdown__selected");
const dropdownCaret = document.querySelector(".dropdown__caret");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownBox = [...document.querySelectorAll(".dropdown__item")];
dropdownButton.addEventListener("click", showDropdown);
function dropboxToggle() {
    dropdownList.classList.toggle("show");
    dropdownCaret.classList.toggle("fa-caret-up");
}
function showDropdown() {
    if (dropdownList) {
        dropboxToggle();
    }
}
dropdownBox.forEach((item) => item.addEventListener("click", replaceTitle));
function replaceTitle(e) {
    const content = e.target.querySelector(".dropdown__text").textContent;
    dropdownContent.textContent = content;
    dropboxToggle();
}
document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        dropdownList.classList.remove("show");
        dropdownCaret.classList.remove("fa-caret-up");
    }
});
