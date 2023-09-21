window.addEventListener("load", function () {
    function slider() {
        this.nextButton = document.querySelector(".slider-next");
        this.prevButton = document.querySelector(".slider-prev");
        this.sliderMain = document.querySelector(".slider-main");
        this.sliderDotItem = [...document.querySelectorAll(".slider-dot-item")];
        this.sliderItem = [...document.querySelectorAll(".slider-item")];
        this.sliderItemWidth = this.sliderItem[1].offsetWidth;
        this.positionX = 0;
        this.prevButton.addEventListener("click", () => {
            this.handleSlider(-1);
        });
        this.nextButton.addEventListener("click", () => {
            console.log(this);
            this.handleSlider(1);
        });
        this.sliderDotItem.forEach((i) => {
            i.addEventListener("click", (e) => this.handleChangeDot(e));
        });
    }
    slider.prototype.handleChangeDot = function sliderDot(e) {
        const dataIndex = e.target.dataset.index;
        console.log("🚀 ~ sliderDot ~ dataIndex:", dataIndex);
        this.positionX = -dataIndex * this.sliderItemWidth;
        this.handleDotClick(-dataIndex * this.sliderItemWidth, dataIndex);
    };
    slider.prototype.handleDotClick = function handleDotClick(
        position,
        activeIndex
    ) {
        this.sliderMain.style = `transform: translateX(${position}px)`;
        this.sliderDotItem.forEach((i) => i.classList.remove("active"));
        this.sliderDotItem[activeIndex].classList.add("active");
    };
    slider.prototype.handleSlider = function (direction) {
        if (direction === 1) {
            if (this.positionX <= -(this.sliderItem.length - 1) * 1000) return;
            this.positionX = this.positionX - this.sliderItemWidth;
            this.handleDotClick(this.positionX, (this.positionX * -1) / 1000);
        } else if (direction === -1) {
            if (this.positionX >= 0) return;
            this.positionX = this.positionX + this.sliderItemWidth;
            this.handleDotClick(this.positionX, (this.positionX * -1) / 1000);
        }
    };
    new slider();
});
