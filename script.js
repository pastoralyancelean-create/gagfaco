// Dark mode toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Show/hide price
function togglePrice(element) {
    const price = element.querySelector(".price");
    price.style.display = price.style.display === "inline" ? "none" : "inline";
}
