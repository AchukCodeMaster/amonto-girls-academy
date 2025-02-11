document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Animate hamburger menu
    const spans = mobileMenuBtn.querySelectorAll("span");
    if (navLinks.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
    } else {
      spans.forEach((span) => (span.style = ""));
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      mobileMenuBtn.classList.remove("active");
      navLinks.classList.remove("active");
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans.forEach((span) => (span.style = ""));
    }
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        mobileMenuBtn.classList.remove("active");
        navLinks.classList.remove("active");
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans.forEach((span) => (span.style = ""));
      }
    });
  });
});
