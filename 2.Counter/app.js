const minusButton = document.querySelector(".counter-descrease");
const plusButton = document.querySelector(".counter-increase");
let counterNumber = document.querySelector(".counter-number");
let contentValue = parseInt(counterNumber.textContent);
minusButton.addEventListener("click", minusFunc);
function minusFunc() {
    if (contentValue <= 0) {
        return;
    }
    contentValue--;
    counterNumber.textContent = contentValue;
}
plusButton.addEventListener("click", plusfunc);
function plusfunc() {
    contentValue++;
    counterNumber.textContent = contentValue;
}
