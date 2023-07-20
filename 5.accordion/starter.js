const header = [...document.querySelectorAll(".accordion-header")];
const activeClass = "is-active";
header.forEach((item) => {
    item.addEventListener("click", showAccordion);
});
function showAccordion(e) {
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle(activeClass);
    if (!content.classList.contains(activeClass)) {
        content.style.height = `0px`;
    }
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}
