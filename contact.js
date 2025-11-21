/// Formspree form connected
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
















