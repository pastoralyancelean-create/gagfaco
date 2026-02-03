const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button icon depending on mode
  if(document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️"; // Sun icon for light mode
  } else {
    themeBtn.textContent = "🌓"; // Moon icon for dark mode
  }
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
}

function togglePrice(el) {
  const price = el.querySelector(".price");
  price.style.display = price.style.display === "inline-block" ? "none" : "inline-block";
}
