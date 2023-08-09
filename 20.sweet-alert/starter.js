const button = document.querySelector(".button");
button.addEventListener("click", notiFunc);
function notiFunc(e) {
    const template = ` <div class="sweet-alert">
    <i class="fa fa-check sweet-icon"></i>
    <p class="sweet-text">Launching nuke !!!!!!</p>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
    setTimeout(function wait() {
        const sweetAlert = document.querySelector(".sweet-alert");
        sweetAlert.parentElement.removeChild(sweetAlert);
    }, 2300);
}
