const dropdown = document.querySelector(".dropdown-wrapper");
const dropdownButton = document.querySelector("button.dropdown");

dropdownButton.addEventListener("click", (event) => {
    dropdown.classList.toggle("_open");
});
