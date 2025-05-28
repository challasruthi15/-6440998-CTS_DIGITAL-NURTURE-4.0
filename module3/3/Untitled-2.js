// Prompt user for an integer
const num = parseInt(prompt("Enter an integer:"), 10);

// Check if input is a valid number
if (isNaN(num)) {
  alert("That's not a valid integer. Please reload and try again.");
} else {
  // Use modulus operator to check even or odd
  if (num % 2 === 0) {
    alert(`${num} is even.`);
  } else {
    alert(`${num} is odd.`);
  }
}
