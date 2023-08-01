const dropdownItems = document.querySelectorAll(".dropdown-item");
const input = document.querySelector(".input-search");
input.addEventListener("input", handleSearch);
function handleSearch(e) {
    let inputContent = e.target.value;
    inputContent = inputContent.toLowerCase();
    dropdownItems.forEach((i) => {
        const contentResult = i.textContent;
        const index = contentResult.toLowerCase().indexOf(inputContent);
        if (
            index >= 0 &&
            contentResult.toLowerCase().startsWith(inputContent)
        ) {
            i.innerHTML = `<span class="primary">${contentResult.substring(
                index,
                index + inputContent.length
            )}</span>${contentResult.substring(inputContent.length)}`;
        }
    });
}
