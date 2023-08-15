window.addEventListener("load", function () {
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");
    const sliderMain = document.querySelector(".slider-main");
    const sliderDotItem = [
        ...this.document.querySelectorAll(".slider-dot-item"),
    ];
    const sliderItem = [...document.querySelectorAll(".slider-item")];
    let positionX = 0;
    const sliderItemWidth = sliderItem[1].offsetWidth;
    prevButton.addEventListener("click", function () {
        handleSlider(-1);
        console.log("working");
    });
    nextButton.addEventListener("click", function () {
        handleSlider(1);
    });
    function handleSlider(direction) {
        if (direction === 1) {
            if (positionX <= -(sliderItem.length - 1) * sliderItemWidth) return;
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log("🚀 ~ handleNextImg ~ positionX:", positionX);
            sliderDotItem.forEach((i) => i.classList.remove("active"));
            sliderDotItem[(positionX * -1) / 1000].classList.add("active");
        }
        if (direction === -1) {
            if (positionX <= (sliderItem.length - 1) * sliderItemWidth) return;
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log("🚀 ~ handleNextImg ~ positionX:", positionX);
            sliderDotItem.forEach((i) => i.classList.remove("active"));
            sliderDotItem[(positionX * -1) / 1000].classList.add("active");
        }
    }
});
