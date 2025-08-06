// const toggleBtn = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// toggleBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
function toggleNavbar() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}

// Mobile dropdowns open on click instead of hover
document.addEventListener("DOMContentLoaded", () => {
  const dropdownParents = document.querySelectorAll("li.has-dropdown > a");

  dropdownParents.forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 600) {
        e.preventDefault(); // Prevent jump
        const submenu = link.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      }
    });
  });
});
