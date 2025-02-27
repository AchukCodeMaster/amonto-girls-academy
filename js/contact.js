document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Here you would typically send the data to a server
  console.log("Form submitted:", formData);

  // Show success message
  alert("Thank you for your message. We will get back to you within 24hrs!");

  // Reset form
  this.reset();
});
