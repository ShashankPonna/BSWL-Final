

  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  document.getElementById("captchaQuestion").innerText = `${num1} + ${num2} =`;

  function validateCaptcha() {
    const userAnswer = parseInt(document.getElementById("captchaInput").value);
    const correctAnswer = num1 + num2;

    if (userAnswer !== correctAnswer) {
      document.getElementById("captchaError").innerText = "Incorrect captcha. Please try again.";
      return false; // prevent form submission
    }

    document.getElementById("captchaError").innerText = "";
    alert("Form submitted successfully!"); // optional
    return true;
  }

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

  const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});