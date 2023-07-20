const tabItems = [...document.querySelectorAll(".tab-item")];
const tabWrapper = [...document.querySelectorAll(".tab-content")];

[...tabItems].forEach((item) => {
    item.addEventListener("click", showTabContent);
});
function showTabContent(event) {
    tabItems.forEach((item) => {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
    const tabNumber = parseInt(event.target.dataset.tab);
    tabWrapper.forEach((item) => {
        item.classList.remove("active");
        if (parseInt(item.getAttribute("data-tab")) === tabNumber) {
            item.classList.add("active");
            console.log(event.target.getAttribute("data-tab"));
        }
    });
}
