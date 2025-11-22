/// Formspree form connected
window.addEventListener("load", function () {
  let links = document.querySelectorAll(".nav-links li a");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

console.log("Form connected to Formspree successfully.");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function () {
    alert("🎉 Thank you! Your feedback has been submitted successfully.");
    
    // Delay reset so Formspree gets the data first
    setTimeout(() => {
      form.reset();
    }, 500);
  });
});


  
document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu on click
    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

   
  
















// // Formspree form connected
// console.log("Form connected to Formspree successfully.");

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("feedbackForm");

//   form.addEventListener("submit", function () {
//     alert("🎉 Thank you! Your feedback has been submitted successfully.");

//     // Clear Form Fields
//     form.reset();
//   });
// });
















