// Dark/Light toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Product price toggle
function togglePrice(element) {
  const price = element.querySelector(".price");
  price.style.display = price.style.display === "inline" ? "none" : "inline";
}

// Hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
}


