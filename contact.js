// Mobile Navbar Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! We have received your message.");
  contactForm.reset();
});
