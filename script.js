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

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});

function closeNav() {
  navLinks.classList.remove("open");
  links.forEach((link) => {
    link.classList.remove("fade");
  });
  overlay.style.display = "none";
}

// Smooth Scroll dengan offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      closeNav();
    }
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
