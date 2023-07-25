window.addEventListener("load", function () {
    const content = document.querySelector(".text");
    content.addEventListener("mouseenter", hover);
    function hover(e) {
        const textPopup = e.target.dataset.tooltip;
        const div = document.createElement("div");
        div.innerHTML = textPopup;
        div.className = "tooltip-text";
        document.body.appendChild(div);
        const cords = e.target.getBoundingClientRect();
        console.log(cords);
        const divHeight = div.offsetHeight;
        const triangleHeight = 20;
        const { width, height, top, right, left } = cords;
        div.style.left = `${left - width / 2}px`;
        div.style.top = `${top - triangleHeight - divHeight}px`;
    }
});
