const menu = document.querySelector(".menu");
console.log("🚀 ~ menu:", menu);
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", showMenu);
function showMenu() {
    menu.classList.toggle("is-show");
    toggle.classList.toggle("fa-bars");
    toggle.classList.toggle("fa-times");
}
document.addEventListener("click", hideMenu);
function hideMenu(event) {
    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
        // !menu.contains(event.target): checking if event.target was click on is menu or not, if not then hide menu
        // !event.target.matches(".menu-toggle"): checking the object was clicked on is menu-toggle or not, if not then hide menu
        menu.classList.remove("is-show");
        toggle.classList.add("fa-bars");
        toggle.classList.remove("fa-times");
    }
}
