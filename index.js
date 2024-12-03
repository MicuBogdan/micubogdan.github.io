const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;
const logo = document.querySelector(".logo"); // Select the logo element
const nav = document.querySelector(".nav"); // Select the nav element
const nav_buttons = document.querySelector(".nav_buttons");
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const text = document.querySelector(".text");

const openOverlayBtn = document.getElementById('openOverlay');
const closeOverlayBtn = document.getElementById('closeOverlay');
const overlay = document.getElementById('overlay');


// Clone the text elements to create a seamless effect
const textElements = slider.innerHTML;

// Listen for change event to apply theme
toggleSwitch.addEventListener("change", () => {
  // Toggle the dark theme on body
  body.classList.toggle("dark-theme", toggleSwitch.checked);
  
  // Apply additional dark theme classes to specific elements
  if (logo) {
    logo.classList.toggle("logo-dark-theme", toggleSwitch.checked);
  }
  if (nav) {
    nav.classList.toggle("nav-dark-theme", toggleSwitch.checked);
  }
  if (nav_buttons) {
    nav_buttons.classList.toggle("nav_buttons-dark-theme", toggleSwitch.checked);
  }
  if (hero) {
    hero.classList.toggle("hero_dark-theme", toggleSwitch.checked);
  }
  if (slider) {
    slider.classList.toggle("slider_dark-theme", toggleSwitch.checked);
  }
  if (text) {
    text.classList.toggle("text_dark-theme", toggleSwitch.checked);
  }
});

slider.innerHTML += textElements; // Duplicate the text

// Set the width of the slider to accommodate the duplicated text
const totalWidth = slider.scrollWidth;
slider.style.width = `${totalWidth}px`;

// Adjust the animation duration based on the total width
const animationDuration = (totalWidth / 100) * 1; // Adjust speed here (20 seconds for full scroll)
slider.style.animationDuration = `${animationDuration}s`;

// Show the overlay
openOverlayBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  overlay.style.display = 'block';
});

// Hide the overlay
closeOverlayBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  overlay.style.display = 'none';
});


