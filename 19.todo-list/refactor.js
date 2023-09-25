class Model {
    constructor() {}
}
class View {
    constructor() {
        // this.todoApp=
    }
    //|| createElement
    createElement(tag, className) {
        const ele = document.createElement(tag);
        if (className) {
            this.ele.classList.add(className);
            return ele;
        }
    }
    //|| getElement
    getElement(selector) {
        const ele = document.querySelector(selector);
        return ele;
    }
}
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}
const todoApp = new Controller(new Model(), new View());
