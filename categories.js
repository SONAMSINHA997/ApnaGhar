// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Load footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
