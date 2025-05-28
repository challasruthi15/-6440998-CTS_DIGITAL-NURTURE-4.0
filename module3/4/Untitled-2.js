// Prompt user to enter a year
const year = parseInt(prompt("Enter a year:"), 10);

// Validate input
if (isNaN(year) || year <= 0) {
  alert("Please enter a valid positive year.");
} else {
  // Leap year logic
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(`${year} is a leap year.`);
  } else {
    alert(`${year} is not a leap year.`);
  }
}
