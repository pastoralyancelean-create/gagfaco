const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function togglePrice(element) {
    const price = element.querySelector(".price");
    price.style.display = price.style.display === "inline" ? "none" : "inline";
}
