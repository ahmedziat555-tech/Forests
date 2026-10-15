// ==========Select Elements==========
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentSlide = 0;

// ==========Actions===============

// Slider next button click

function slidernext() {
  slides.forEach((slide) => slide.classList.remove("active"));
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add("active");
}

// Slider previous button click
function sliderprev() {
  slides.forEach((slide) => slide.classList.remove("active"));
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  slides[currentSlide].classList.add("active");
}

//  Display slides automatically every 5 seconds
setInterval(() => {
  slidernext();
}, 5000);

// ===========Event Listeners==========

// Slider next button click event
nextBtn.addEventListener("click", slidernext);

// Slider previous button click event
prevBtn.addEventListener("click", sliderprev);
