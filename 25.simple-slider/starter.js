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
    });
    nextButton.addEventListener("click", function () {
        handleSlider(1);
    });
    function handleDotClick(position, activeIndex) {
        sliderMain.style = `transform: translateX(${position}px)`;
        sliderDotItem.forEach((i) => i.classList.remove("active"));
        sliderDotItem[activeIndex].classList.add("active");
    }
    function handleSlider(direction) {
        if (direction === 1) {
            if (positionX <= -(sliderItem.length - 1) * 1000) return;
            positionX = positionX - sliderItemWidth;
            handleDotClick(positionX, (positionX * -1) / 1000);
        } else if (direction === -1) {
            if (positionX >= 0) return;
            positionX = positionX + sliderItemWidth;
            handleDotClick(positionX, (positionX * -1) / 1000);
        }
    }
    sliderDotItem.forEach((i) => {
        i.addEventListener("click", sliderDot);
        function sliderDot(e) {
            const dataIndex = e.target.dataset.index;
            console.log("🚀 ~ sliderDot ~ dataIndex:", dataIndex);
            positionX = -dataIndex * sliderItemWidth;
            handleDotClick(-dataIndex * sliderItemWidth, dataIndex);
        }
    });
});
