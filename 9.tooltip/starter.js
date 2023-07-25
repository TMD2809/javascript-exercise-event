window.addEventListener("load", function () {
    const content = document.querySelector(".text");
    content.addEventListener("mouseenter", hover);
    function hover(e) {
        const textPopup = e.target.dataset.tooltip;
        const div = document.createElement("div");
        div.innerHTML = textPopup;
        div.className = "tooltip-text";
        document.body.appendChild(div);
    }
});
