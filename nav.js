// const toggleBtn = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// toggleBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
function toggleNavbar() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}

// // Mobile dropdowns open on click instead of hover
// document.addEventListener("DOMContentLoaded", () => {
//   const dropdownParents = document.querySelectorAll("li.has-dropdown > a");

//   dropdownParents.forEach(link => {
//     link.addEventListener("click", e => {
//       if (window.innerWidth <= 600) {
//         e.preventDefault(); // Prevent jump
//         const submenu = link.nextElementSibling;
//         submenu.style.display = submenu.style.display === "block" ? "none" : "block";
//       }
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".has-dropdown > a");
  const dropdownLinks = document.querySelectorAll(".has-dropdown ul a"); // actual dropdown items
  const nav = document.getElementById("mainNav");

  // Toggle submenus on mobile (for parent items)
  dropdownToggles.forEach(link => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const submenu = link.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Close nav when a dropdown link (child link) is clicked
  dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active"); // Hide nav
      }
    });
  });
});
