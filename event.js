// const button = document.querySelector(".launch");
// const content = document.querySelector("span");
// function handleClick() {
//     console.log("launch Nuc");
// }
// function handleClickSpan(e) {
//     e.stopPropagation();
//     console.log("span clicked");
// }
// button.addEventListener("click", handleClick);
// content.addEventListener("click", handleClickSpan);
// ---------------StopPropagation---------------
// {
//     const button = document.querySelector(".launch");
//     const content = document.querySelector("span");
//     function handleClickSpan(e) {
//         e.stopImmediatePropagation(e);
//         // e.stopPropagation();
//         console.log("span clicked");
//     }
//     function handleClick() {
//         console.log("launch Nuc");
//     }
//     content.addEventListener("click", handleClickSpan);
//     content.addEventListener("click", handleClick);
// }
// ---------------Capture---------------
// {
//     const button = document.querySelector(".launch");
//     const content = document.querySelector("span");
//     function handleClick() {
//         console.log("launch Nuc");
//     }
//     function handleClickSpan() {
//         console.log("span clicked");
//     }
//     content.addEventListener("click", handleClickSpan, { capture: true });
//     button.addEventListener("click", handleClick, { capture: true });
// }
// ---------------Target and currentTarget---------------
// button.addEventListener("click", function (event) {
//     // event.target: select object was clicked
//     console.log(`event.target:${event.target}`);
//     // event.currentTarget: select exactly element was clicked on
//     console.log(`event.target:${event.target}`);
// });
// ---------------Prevent-default---------------
// {
//     const rocket = document.querySelector(".rocket");
//     rocket.addEventListener("click", function preventDefault(event) {
//         event.preventDefault();
//         console.log("hit me");
//     });
// }
// ---------------Background-changing---------------
// --------------- Object Style ---------------
// const changeStyle = document.querySelector(".rocket");
// changeStyle.addEventListener("click", changeColor);
// function changeColor(event) {
//     console.log(event.target.style); // return an css style object
//     event.target.style.color = "blue";
// }
// --------------- Custom attribute ---------------

// --------------- Event: Mouse move ---------------

// // mousemove: activated when mouse is moving on the specific object and also inclue it own child and the program gonna count every movement of the mouse when it enter the object
// const moveTest = document.querySelector(".launch");
// moveTest.addEventListener("mousemove", handleMouseMove);
// function handleMouseMove() {
//     console.log("moved");
// }

// // mouseenter: activated when mouse is moving on the specific object not inclue it own child, to reactive the mouseenter, the mouse has to leave the object reenter the object
const moveTest = document.querySelector(".launch");
moveTest.addEventListener("mouseenter", handleMouseMove1);
function handleMouseMove1() {
    console.log("mouse enter");
}

// // mouseleave: activated when mouse is leaving the specific object
const moveTest1 = document.querySelector(".launch");
moveTest1.addEventListener("mouseleave", handleMouseMove2);
function handleMouseMove2() {
    console.log("mouse leave");
}

// --------------- Event: Mouse move ---------------

// // clientX, clientY: get coordinate follow the viewport
// // pageX, pageY: get coordinate follow the document
document.addEventListener("mousemove", Coodinate);
function Coodinate(event) {
    console.log(`pageX: ${event.pageX}`);
    console.log(`clientX: ${event.clientX}`);
}

// --------------- Change event ---------------
document.addEventListener("change", function (e) {
    console.log(actived);
});
// --------------- Focus and Blur event ---------------

// // Focus event: active when click on target
Input.addEventListener("focus", function (e) {
    console.log("input is focusing");
});

// // Blur event: active when focus is active and click outside target
Input.addEventListener("blur", function (e) {
    console.log("input is bluring");
});

// --------------- Submit Form ---------------
// // Get information have submited in form
const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log(input.value);
}
