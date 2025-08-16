// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero Background Slideshow
const hero = document.querySelector('.hero');

const images = [
  'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
];

let currentIndex = 0;

// Function to change background
function changeHeroImage() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// **Call the function every 5 seconds**
setInterval(changeHeroImage, 5000); // 5000ms = 5 seconds

// Call button
const callBtn = document.getElementById('callNow');
let called = false; // toggle state

callBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent immediate call to apply styles

  if (!called) {
    callBtn.style.backgroundColor = '#28a745';
    callBtn.style.borderColor = '#28a745';
    callBtn.style.color = '#fff';
    callBtn.textContent = '📞 Called';
    called = true;
  } else {
    callBtn.style.backgroundColor = 'var(--primary-color)';
    callBtn.style.borderColor = 'var(--primary-color)';
    callBtn.style.color = '#fff';
    callBtn.textContent = '📞 Call Now';
    called = false;
  }

  if (called) {
    setTimeout(() => {
      window.location.href = callBtn.href;
    }, 200);
  }
});

// Log button
const logBtn = document.getElementById('logCallIntent');
logBtn.addEventListener('click', () => {
  logBtn.style.backgroundColor = '#28a745';
  logBtn.style.borderColor = '#28a745';
  logBtn.style.color = '#fff';
  logBtn.textContent = '✅ Logged!';
});

// Search scroll
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    alert("Please type a skill or location to search!");
  }
});
