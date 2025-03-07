document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Show all images immediately on page load
  galleryItems.forEach(item => {
    item.classList.add("loaded");
    item.style.opacity = "1";
    item.style.transform = "scale(1)";
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.classList.remove("hidden");
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        } else {
          item.classList.add("hidden");
          item.style.opacity = "0";
          item.style.transform = "scale(0.9)";
        }
      });
    });
  });

  // Image loading
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("load", () => {
      item.classList.add("loaded");
    });
  });

  // Lazy loading for images
  const lazyLoad = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector("img");
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(entry.target);
      }
    });
  });

  galleryItems.forEach((item) => {
    lazyLoad.observe(item);
  });
});
