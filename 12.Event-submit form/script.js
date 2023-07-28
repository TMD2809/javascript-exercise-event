const form = document.querySelector(".form");
let input = document.querySelector(".input");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = this.elements["username"].value;
    const gender = this.elements["gender"].value;

    // checkbox has to query different from other
    const hobby = [...this.querySelectorAll(`input[name='hobby']`)];
    let hobbyValue = [];
    hobby.forEach((item) => {
        if (item.checked) {
            hobbyValue.push(item.value);
        }
    });
    console.log({ username, hobbyValue, gender });
});
