const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", menuFixed);
function menuFixed(e) {
    const scrollY = window.pageYOffset;
    if (scrollY > headerHeight) {
        header.classList.add("is-fixed");
    } else {
        header.classList.remove("is-fixed");
    }
}
