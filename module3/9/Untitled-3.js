// Prompt user for marks
const marks = parseFloat(prompt("Enter your marks out of 100:"));

// Validate input
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Please enter a valid number between 0 and 100.");
} else {
  let grade;

  // Assign grades based on ranges
  if (marks >= 90) {
    grade = 'A';
  } else if (marks >= 80) {
    grade = 'B';
  } else if (marks >= 70) {
    grade = 'C';
  } else if (marks >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  // Display result
  alert(`Your grade is: ${grade}`);
}
