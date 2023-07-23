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
document.body.addEventListener("click", hideLightBox);
function hideLightBox(e) {
    const lightBoxImg = document.querySelector(".lightbox-image");
    if (!lightBoxImg) return; //refactor
    let lightBoxSrc = lightBoxImg.getAttribute("src");
    let index = boxImg.findIndex(
        (item) => item.getAttribute("src") === lightBoxSrc
    );
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")) {
        // refactored:
        // const lightBoxSrc = lightBoxImg.getAttribute("src");
        // let index = boxImg.findIndex(
        //     (item) => item.getAttribute("src") === lightBoxSrc
        // );
        index = index + 1;
        if (index > boxImg.length - 1) {
            index = 0;
        }
        // const newSrc = boxImg[index].getAttribute("src");
        // lightBoxImg.setAttribute("src", newSrc);
        // refactor:
        editSrc(lightBoxImg, index);
    } else if (e.target.matches(".lightbox-previous")) {
        // refactored:
        // const lightBoxSrc = lightBoxImg.getAttribute("src");
        // let index = boxImg.findIndex(
        //     (item) => item.getAttribute("src") === lightBoxSrc
        // );
        index = index - 1;
        if (index < 0) {
            index = boxImg.length - 1;
        }
        // const newSrc = boxImg[index].getAttribute("src");
        // lightBoxImg.setAttribute("src", newSrc);
        // refactor:
        editSrc(lightBoxImg, index);
    }
    function editSrc(lightBoxImg, index) {
        const newSrc = boxImg[index].getAttribute("src");
        lightBoxImg.setAttribute("src", newSrc);
    }
}
