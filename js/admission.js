document.addEventListener("DOMContentLoaded", () => {
  const admissionForm = document.getElementById("admissionForm");

  admissionForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic form validation
    const requiredFields = admissionForm.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value) {
        isValid = false;
        field.classList.add("error");
      } else {
        field.classList.remove("error");
      }
    });

    if (!isValid) {
      alert("Please fill in all required fields");
      return;
    }

    // File size validation for result slip
    const resultSlip = document.getElementById("resultSlip").files[0];
    if (resultSlip && resultSlip.size > 5 * 1024 * 1024) {
      // 5MB limit
      alert("Result slip image must be less than 5MB");
      return;
    }

    try {
      // Here you would typically send the form data to your server
      // For now, we'll just show a success message
      alert("Application submitted successfully! We will contact you soon.");
      admissionForm.reset();
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  });

  // Real-time validation
  const inputs = admissionForm.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.hasAttribute("required") && !input.value) {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  });

  // Reset form validation states
  admissionForm.addEventListener("reset", () => {
    inputs.forEach((input) => {
      input.classList.remove("error");
    });
  });
});
