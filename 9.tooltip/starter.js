window.addEventListener("load", function () {
    const content = document.querySelector(".text");
    content.addEventListener("mouseenter", hover);
    function hover(e) {
        console.log("activated");
    }
});
