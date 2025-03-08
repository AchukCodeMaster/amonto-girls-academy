// Teacher data
export const teachers = [
  {
    name: "Ayen Mathiang",
    subject: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?w=300&auto=format&fit=crop",
  },
  {
    name: "John Deng",
    subject: "Physics",
    image:
      "https://images.unsplash.com/photo-1506099914961-765be7a97019?w=300&auto=format&fit=crop",
  },
  {
    name: "Grace Akol",
    subject: "English Language",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&auto=format&fit=crop",
  },
  {
    name: "Peter Garang",
    subject: "History",
    image:
      "https://images.unsplash.com/photo-1553907725-c3d2e2ccc00e?w=300&auto=format&fit=crop",
  },
  {
    name: "Mary Aduol",
    subject: "Biology",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=300&auto=format&fit=crop",
  },
  {
    name: "Simon Wani",
    subject: "Physical Education",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop",
  },
];

// Function to create teacher cards
function createTeacherCards() {
  const teachersGrid = document.getElementById("teachersGrid");

  teachers.forEach((teacher) => {
    const card = document.createElement("div");
    card.className = "teacher-card";

    card.innerHTML = `
        <img src="${teacher.image}" alt="${teacher.name}" class="teacher-image">
        <div class="teacher-info">
            <h2 class="teacher-name">${teacher.name}</h2>
            <p class="teacher-subject">${teacher.subject}</p>
        </div>
    `;

    teachersGrid.appendChild(card);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", createTeacherCards);
