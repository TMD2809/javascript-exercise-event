// SCROLL EVENT
// // active when scroll mouse
window.addEventListener(
    "scroll",
    debounceFn(function (e) {
        console.log("scroll");
    }, 100)
);
// DeBounce
// // is a technique make a function has to wait in specific amount of time before run. in the estimate time, it gonna ignore every effect
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
// window.pageYOffset and window.pageXOffset
// // window.pageXOffset.png: distance from the top of view port to the nearest point of scroll-bar
// // window.pageYOffset.png: distance from the left of viewport to the nearest point of scroll-bar

// scroll method and attributes

// // scrollHeight: return element's height including padding but not include border

// // scrollWidth: return element's width including padding but not include border

// // scrollTop scrollLeft are similar as window.pageX/YOffset and use for element when window.pageX/yOffset use for viewport
const boxed = document.querySelector(".boxed");
boxed.addEventListener("scroll", function () {
    console.log(boxed.scrollTop);
    console.log(boxed.scrollLeft);
});

// Element.clientHeight is the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).
// clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present).

// //scroll(x,y) use to move to specific coordinate
// //window.scroll(0,279)

// const scrollToTop = document.querySelector(".button");
// scrollToTop.addEventListener('click',function({
//     boxed.scroll(0,0)
// }))

// // offsetWidth and scrollWidth
// // element.scrollWidth will return width of element, if that element contain child element which is bigger than it then it gonna return width of the bigger element(the father element need to has overflow: auto)
// // offsetWidth and scrollWidth.png

// // scrollIntoView(): scroll into area where able to observe the selected element
boxed.scrollIntoView();

// wheel event
// //scroll tab
// tabList.addEventListener("wheel", function (e) {
//     const delta = e.deltaY; // deltaY is a value has positive and negative value, positive when scroll up-negative when scroll down
//     this.scrollLeft += delta;
// });
