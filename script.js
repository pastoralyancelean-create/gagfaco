function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function togglePrice(el) {
  const price = el.querySelector(".price");
  price.style.display =
    price.style.display === "inline-block" ? "none" : "inline-block";
}
