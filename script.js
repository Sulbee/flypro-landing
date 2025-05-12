// script.js
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in');

  function appearOnScroll() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fader.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll(); // Run on load
});

// Sticky Header
const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    lastScroll = currentScroll;
});