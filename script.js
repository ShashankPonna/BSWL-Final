const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

let slideIndex = 0;
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-play every 4s
setInterval(() => {
  showSlide(slideIndex + 1);
}, 4000);

// Manual controls
document.querySelector(".next").addEventListener("click", () => {
  showSlide(slideIndex + 1);
});
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(slideIndex - 1);
});

// Show the button when scrolled down 100px
  window.onscroll = function () {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
