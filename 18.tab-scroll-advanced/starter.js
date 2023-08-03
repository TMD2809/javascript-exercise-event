const tabList = document.querySelector(".tab-list");
const tabListPosition = tabList.offsetLeft;
const nextButton = document.querySelector(".tab-next");
const prevButton = document.querySelector(".tab-prev");
const delta = 40;
const scrollBar = tabList.scrollWidth - tabList.clientWidth;
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
    prevButton.classList.remove("disabled");
    if (this.scrollLeft > 0) {
        nextButton.classList.remove("disabled");
    }
    if (tabList.scrollLeft >= scrollBar) {
        nextButton.classList.add("disabled");
    } else if (tabList.scrollLeft <= 0) {
        prevButton.classList.add("disabled");
    }
});
prevButton.addEventListener("click", scrollPrev);
function scrollPrev(e) {
    nextButton.classList.remove("disabled");
    tabList.scrollLeft -= delta;
    console.log(tabList.scrollLeft);
    if (tabList.scrollLeft <= 0) {
        prevButton.classList.add("disabled");
    }
}
nextButton.addEventListener("click", scrollNext);
function scrollNext(e) {
    prevButton.classList.remove("disabled");
    tabList.scrollLeft += delta;
    console.log(tabList.scrollLeft);
    if (tabList.scrollLeft >= scrollBar) {
        nextButton.classList.add("disabled");
    }
}
