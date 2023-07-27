const image = document.querySelector(".image");
const coverImage = document.querySelector(".image-cover");
const imageWrapper = document.querySelector(".image-wrapper");
coverImage.addEventListener("mousemove", hoverEnable);
const imageWrapperLeft = imageWrapper.offsetLeft;
const imageWrapperTop = imageWrapper.offsetTop;
console.log(imageWrapperLeft, imageWrapperTop);
function hoverEnable(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width:auto; max-height:unset;";
    const ratio = imageWrapper.offsetWidth / image.offsetWidth;
    const x = pX * ratio;
    const y = pY * ratio;
    image.style = `
    left: ${-x + imageWrapperLeft}px;
    top: ${-y}px;
    width:auto;
    max-height:unset;`;
}
coverImage.addEventListener("mouseleave", hoverDisable);
function hoverDisable(e) {
    image.style = "";
}
