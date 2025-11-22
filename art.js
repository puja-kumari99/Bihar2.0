window.addEventListener("load", function () {
  let links = document.querySelectorAll(".nav-links li a");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);



const cards = document.querySelectorAll('.destination-card');
  const infoBox = document.getElementById('info-box');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const info = card.getAttribute('data-info');
      infoBox.textContent = info;
      infoBox.scrollIntoView({ behavior: 'smooth' });
    });
  });




  
  function showInfo() {
      const info = document.getElementById('templeInfo');
      // Toggle visibility
      if (info.style.display === 'none') {
        info.style.display = 'block';
      } else {
        info.style.display = 'none';
      }
    }


  document.addEventListener("DOMContentLoaded", function () {
    
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu on click
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

  });