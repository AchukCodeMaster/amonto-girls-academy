document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const spans = mobileMenuBtn.querySelectorAll("span");
    spans[0].style.transform = navLinks.classList.contains("active")
      ? "rotate(45deg) translate(5px, 6px)"
      : "";
    spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1";
    spans[2].style.transform = navLinks.classList.contains("active")
      ? "rotate(-45deg) translate(5px, -6px)"
      : "";
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans.forEach((span) => (span.style = ""));
    }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 60;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        navLinks.classList.remove("active");
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans.forEach((span) => (span.style = ""));
      }
    });
  });

  // Active Navigation Link Highlight
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  function setActiveNavLink() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").slice(1) === current) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNavLink);
  window.addEventListener("load", setActiveNavLink);

  // Form Submission Handler
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply animations to sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});
