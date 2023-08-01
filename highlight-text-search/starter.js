const dropdownItems = document.querySelectorAll(".dropdown-item");
const input = document.querySelector(".input-search");
input.addEventListener("input", handleSearch);
function handleSearch(e) {
    let inputContent = e.target.value.toLowerCase();
    dropdownItems.forEach((i) => {
        const contentResult = i.textContent.toLowerCase();
        const index = contentResult.indexOf(inputContent);
        if (index >= 0 && contentResult.startsWith(inputContent)) {
            i.innerHTML = `<span class="primary">${inputContent}</span>${contentResult.substring(
                inputContent.length
            )}`;
        }
    });
}
