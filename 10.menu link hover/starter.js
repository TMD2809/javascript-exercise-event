const menu = [...document.querySelectorAll(".menu-link")];
menu.forEach((i) => i.addEventListener("mouseenter", hoverEnable));
const menuContainer = document.querySelector(".menu");
const div = document.createElement("div");
div.className = "line-effect";
document.body.appendChild(div);
function hoverEnable(e) {
    const cord = e.target.getBoundingClientRect();
    const { width, top, left, height } = cord;
    const Blank = 5;
    div.style.width = `${width}px`;
    div.style.left = `${left}px`;
    div.style.top = `${top + height + Blank}px`;
}
menuContainer.addEventListener("mouseleave", hoverDisable);
function hoverDisable() {
    div.style.width = `0px`;
}
