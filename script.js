 window.addEventListener("load", function () {
  let links = document.querySelectorAll(".nav-links li a");
  let currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
 
 
 function scrollToFestivals() {
  const festivalSection = document.getElementById("festivals");
  festivalSection.scrollIntoView({ behavior: "smooth" });
}

const audios = document.querySelectorAll('audio');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });