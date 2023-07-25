const menu = [...document.querySelectorAll(".menu-link")];
menu.forEach((i) => i.addEventListener("mouseenter", hoverEnable));
const div = document.createElement("div");
div.className = "line-effect";
document.body.appendChild(div);
function hoverEnable(e) {
    const hightLight = document.querySelector(".line-effect");
    const cord = e.target.getBoundingClientRect();
    const { width, top, left, height } = cord;
    const Blank = 5;
    hightLight.style.width = `${width}px`;
    hightLight.style.left = `${left}px`;
    hightLight.style.top = `${top + height + Blank}px`;
}
