document.addEventListener("DOMContentLoaded", function () {
    const images = [...document.querySelectorAll("img")];
    window.addEventListener("scroll", handleScroll);
    function handleScroll(e) {
        let windowScrollFromTop = window.pageYOffset;
        console.log(
            "🚀 ~ handleScroll ~ windowScrollFromTop:",
            windowScrollFromTop
        );
        images.forEach((i) => {
            const iPosition = i.offsetTop;
            console.log("🚀 ~ images.forEach ~ iPosition:", iPosition);
            if (windowScrollFromTop > iPosition - i.offsetHeight) {
                i.classList.add("active");
            } else {
                i.classList.remove("active");
            }
        });
    }
});
