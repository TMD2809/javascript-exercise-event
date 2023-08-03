const tabItems = [...document.querySelectorAll(".tab-item")];
const tabList = document.querySelector(".tab-list");
const tabListPosition = tabList.offsetLeft;
console.log("🚀 ~ tabListPosition:", tabListPosition);
tabItems.forEach((i) => i.addEventListener("click", handleClick));
function handleClick(e) {
    tabItems.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
    const spaceScroll = e.target.offsetLeft - tabListPosition;
    tabList.scroll(spaceScroll / 2, 0);
}
