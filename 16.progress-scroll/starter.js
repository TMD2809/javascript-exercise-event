function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
window.addEventListener(
    "scroll",
    debounceFn(function menuFixed() {
        const scrollY = window.pageYOffset;
        if (scrollY > headerHeight) {
            header && header.classList.add("is-fixed");
            document.body.style.paddingTop = `${headerHeight}px`;
        } else {
            document.body.style.paddingTop = 0;
            header && header.classList.remove("is-fixed");
        }
    }, 90)
);
const progress = document.querySelector(".progress");
window.addEventListener("scroll", scrollProgress);
function scrollProgress(e) {
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;
    console.log("🚀 ~ scrollProgress ~ scrollY:", scrollY);
    progress.style.width = `${(scrollY / 1988) * 100 * scrollX}`;
    // console.log(`progress Width:`progress.offsetWidth);
}
