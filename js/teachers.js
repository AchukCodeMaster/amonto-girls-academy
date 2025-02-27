// Teacher data
export const teachers = [
  {
    name: "Sarah Johnson",
    subject: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Michael Chen",
    subject: "Science",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Emily Rodriguez",
    subject: "English Literature",
    image:
      "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "David Wilson",
    subject: "History",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Maria Garcia",
    subject: "Spanish",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "James Thompson",
    subject: "Physical Education",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
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
