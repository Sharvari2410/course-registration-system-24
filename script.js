// Handle student form submission
document.getElementById('student-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    document.getElementById('student-info').innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;
    document.getElementById('student-form').reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Function to register for a course
let registeredCourses = [];

function registerCourse(course) {
  if (!registeredCourses.includes(course)) {
    registeredCourses.push(course);
    updateCourseList();
  } else {
    alert(`${course} is already registered.`);
  }
}

// Update the displayed list of registered courses
function updateCourseList() {
  const courseList = document.getElementById('courses-list');
  courseList.innerHTML = '';  // Clear the list before adding new items

  registeredCourses.forEach(course => {
    const listItem = document.createElement('li');
    listItem.textContent = course;
    courseList.appendChild(listItem);
  });
}
