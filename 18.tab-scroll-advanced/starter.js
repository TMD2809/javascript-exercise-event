const tabList = document.querySelector(".tab-list");
const tabListPosition = tabList.offsetLeft;
const nextButton = document.querySelector(".tab-next");
const prevButton = document.querySelector(".tab-prev");
const tabItems = [...document.querySelectorAll(".tab-item")];
tabItems.forEach((i) => i.addEventListener("click", handleClick));
function handleClick(e) {
    tabItems.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
    let spaceScroll =
        e.target.offsetLeft >= tabListPosition
            ? e.target.offsetLeft - tabListPosition
            : e.target.offsetLeft;
    tabList.scroll(spaceScroll / 2, 0);
}
tabList.addEventListener("wheel", function (e) {
    const delta = e.deltaY;
    this.scrollLeft += delta;
});
prevButton.addEventListener("click", scrollPrev);
function scrollPrev(e) {
    nextButton.classList.remove("disabled");
    const delta = 40;
    tabList.scrollLeft -= delta;
    console.log(tabList.scrollLeft);
    if (tabList.scrollLeft <= 0) {
        prevButton.classList.add("disabled");
        nextButton.classList.remove("disabled");
    }
}
nextButton.addEventListener("click", scrollNext);
function scrollNext(e) {
    prevButton.classList.remove("disabled");
    const delta = 40;
    tabList.scrollLeft += delta;
    console.log(tabList.scrollLeft);
    if (tabList.scrollLeft >= 1515) {
        nextButton.classList.add("disabled");
    }
}
