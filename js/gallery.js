document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        } else {
          item.style.opacity = "0.3";
          item.style.transform = "scale(0.95)";
        }
      });
    });
  });

  // Image loading animation
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("load", () => {
      item.classList.add("loaded");
    });
  });

  // Smooth scroll for gallery
  const gallery = document.querySelector(".masonry-grid");
  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    gallery.style.cursor = "grabbing";
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  gallery.addEventListener("mouseleave", () => {
    isDown = false;
    gallery.style.cursor = "grab";
  });

  gallery.addEventListener("mouseup", () => {
    isDown = false;
    gallery.style.cursor = "grab";
  });

  gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
  });
});
