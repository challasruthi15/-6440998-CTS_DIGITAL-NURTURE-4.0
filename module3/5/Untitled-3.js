// Prompt user for a number
const num = parseInt(prompt("Enter a number for its multiplication table:"), 10);

// Validate input
if (isNaN(num)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  let result = `Multiplication Table for ${num}:\n`;

  // Loop from 1 to 10
  for (let i = 1; i <= 10; i++) {
    result += `${num} x ${i} = ${num * i}\n`;
  }

  // Display the result
  alert(result);
}
