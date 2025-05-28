// Prompt user for a non-negative integer
const input = prompt("Enter a non-negative integer to calculate its factorial:");
const number = parseInt(input, 10);

// Validate input
if (isNaN(number) || number < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  let factorial = 1;

  // Calculate factorial using a for loop
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  // Display result
  alert(`The factorial of ${number} is ${factorial}`);
}
