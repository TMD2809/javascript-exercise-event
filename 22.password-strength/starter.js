const input = document.querySelector(".input");
const length = document.querySelector(".check-length");
const uppercase = document.querySelector(".check-upper");
const number = document.querySelector(".check-number");
const special = document.querySelector(".check-special");
const checkItem = [...document.querySelectorAll(".check-item")];
const regUppercase = /(?=.*[A-Z])/;
const regNumber = /(?=.*\d)/;
const regSpecialChar = /(?=.*\W)/;
function regPass(cases, condition, mailInput) {
    if (cases.test(mailInput)) {
        condition.classList.add("active");
        condition.classList.remove("unactive");
    } else {
        condition.classList.remove("active");
        condition.classList.add("unactive");
    }
}
input.addEventListener("input", handlePassword);
function handlePassword(e) {
    const mailInput = e.target.value;
    if (mailInput === "") {
        checkItem.forEach((i) => {
            i.classList.remove("unactive");
            i.classList.remove("active");
        });
        return;
    }
    if (mailInput.length >= 8) {
        length.classList.add("active");
        length.classList.remove("unactive");
    } else {
        length.classList.remove("active");
        length.classList.add("unactive");
    }
    regPass(regUppercase, uppercase, mailInput);
    regPass(regNumber, number, mailInput);
    regPass(regSpecialChar, special, mailInput);
}
