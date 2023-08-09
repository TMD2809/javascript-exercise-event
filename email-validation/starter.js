const input = document.querySelector(".input");
const check = document.querySelector(".fa-check");
const errorCheck = document.querySelector(".fa-times");
input.addEventListener("input", handleMailValidation);
function handleMailValidation(e) {
    const emailInput = e.target.value.trim; //|| trim: remove white leading and trailing of input string
    const regMail = /(\w)(@gmail.com)/;
    const regMailResult = regMail.test(emailInput);
    if (regMailResult === true) {
        errorCheck.style = ``;
        check.style = `opacity: 1; visibility: visible; transform: scale(1)`;
    } else if (regMailResult === false) {
        check.style = ``;
        errorCheck.style = `opacity: 1; visibility: visible; transform: scale(1)`;
    }
}
