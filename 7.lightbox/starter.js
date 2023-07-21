const boxImg = [...document.querySelectorAll("img")];
boxImg.forEach((item) => item.addEventListener("click", lightBox));
function lightBox(e) {
    let imgSrc = e.target.getAttribute("src");
    const template = `<div class="lightbox">
<div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-previous"></i>
    <img
        class="lightbox-image"
        src=${imgSrc}
        alt=""
    />
    <i class="fa fa-angle-right lightbox-next"></i>
</div>
</div> `;
    document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", hideLightBox);
function hideLightBox(e) {
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
    }
}
