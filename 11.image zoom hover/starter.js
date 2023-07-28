const image = document.querySelector(".image");
const coverImage = document.querySelector(".image-cover");
const imageWrapper = document.querySelector(".image-wrapper");
coverImage.addEventListener("mousemove", hoverEnable);
const imageWrapperLeft = imageWrapper.offsetLeft;
const imageWrapperTop = imageWrapper.offsetTop;
function hoverEnable(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    const spaceX = (image.offsetWidth / 2 - imageWrapper.offsetWidth) * 2;
    const spaceY = (image.offsetHeight / 2 - imageWrapper.offsetHeight) * 2;
    const imageWidth = image.offsetWidth + spaceX;
    const imageHeight = image.offsetHeight + spaceY;
    const ratioX = imageWidth / imageWrapper.offsetWidth / 2;
    const ratioY = imageHeight / imageWrapper.offsetHeight / 2;
    const x = pX;
    const y = pY;
    image.style = `
    left: ${(-x + imageWrapperLeft) * ratioX}px;
    top: ${(-y + imageWrapperTop) * ratioY}px;
    width:auto;
    max-height:unset;
    transform:none;`;
}
coverImage.addEventListener("mouseleave", hoverDisable);
function hoverDisable(e) {
    image.style = "";
}
