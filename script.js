// DARK MODE TOGGLE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️"; // sun icon for light mode
  } else {
    themeBtn.textContent = "🌓"; // moon icon for dark mode
  }
});

// HAMBURGER MENU
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
}

// PRODUCT PRICE TOGGLE
function togglePrice(el) {
  const price = el.querySelector(".price");
  price.style.display = price.style.display === "inline-block" ? "none" : "inline-block";
}
