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
    const spaceScroll = e.target.offsetLeft;
    tabList.scroll(spaceScroll / 1.15, 0);
    if (e.target.textContent === tabItems[tabItems.length - 1].textContent) {
        nextButton.classList.add("disabled");
        prevButton.classList.remove("disabled");
    } else if (e.target.textContent === tabItems[0].textContent) {
        nextButton.classList.remove("disabled");
        prevButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
        prevButton.classList.remove("disabled");
    }
}
tabList.addEventListener("wheel", function (e) {
    const delta = e.deltaY;
    this.scrollLeft += delta;
    if (this.scrollLeft > 0) {
        prevButton.classList.remove("disabled");
        console.log(1);
    } else {
        nextButton.classList.remove("disabled");
        console.log(2);
    }
    if (this.scrollLeft >= scrollBar) {
        nextButton.classList.add("disabled");
        console.log(3);
    } else if (this.scrollLeft <= 0) {
        prevButton.classList.add("disabled");
        console.log(4);
    }
});
prevButton.addEventListener("click", scrollPrev);
function scrollPrev(e) {
    nextButton.classList.remove("disabled");
    tabList.scrollLeft -= delta;
    if (tabList.scrollLeft <= 0) {
        prevButton.classList.add("disabled");
    }
}
nextButton.addEventListener("click", scrollNext);
function scrollNext(e) {
    prevButton.classList.remove("disabled");
    tabList.scrollLeft += delta;
    if (tabList.scrollLeft >= scrollBar) {
        nextButton.classList.add("disabled");
    }
}
