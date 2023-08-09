const input = document.querySelector(".input");
const check = document.querySelector(".fa-check");
const errorCheck = document.querySelector(".fa-times");
input.addEventListener("input", handleMailValidation);
function handleMailValidation(e) {
    const emailInput = e.target.value.trim(); //|| trim: remove white leading and trailing of input string
    const regMail = /(\w)(@gmail.com)/;
    const regMailResult = regMail.test(emailInput);
    if (regMailResult) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
    } else {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
    }
    if (!emailInput) {
        e.target.classList.remove("invalid");
    }
}
