const eye = document.querySelector(".toggle");
const input = document.querySelector(".toggle").previousElementSibling;
eye.addEventListener("click", togglePassword);
function togglePassword() {
    if (input.getAttribute("type") === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
