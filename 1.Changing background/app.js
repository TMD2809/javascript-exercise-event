const button = document.querySelector("button");
button.addEventListener("click", clickAction);
const colorPlatte = [
    "#15616D",
    "#4ea8de",
    `#D8DBE2`,
    `#A9BCD0`,
    `#58A4B0`,
    `#373F51`,
    `#1B1B1E`,
];
function clickAction() {
    const pickColor =
        colorPlatte[Math.floor(Math.random() * colorPlatte.length)];
    document.body.style.backgroundColor = pickColor;
}
