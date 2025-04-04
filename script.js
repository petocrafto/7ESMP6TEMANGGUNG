function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
        document.getElementById("overlay").style.opacity = "1";
    }, 10); // Delay to trigger opacity transition
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
    }, 500); // Match the transition time for the opacity
}

// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
});

// Close navbar when clicking on overlay
overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.style.display = 'none';
});

// Close navbar when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.style.display = 'none';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
