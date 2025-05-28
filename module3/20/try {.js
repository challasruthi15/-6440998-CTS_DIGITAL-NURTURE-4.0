try {
  // Prompt user for two integers
  const num1 = parseInt(prompt("Enter the numerator (integer):"), 10);
  const num2 = parseInt(prompt("Enter the denominator (integer):"), 10);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input: Please enter valid integers.");
  }

  // Check for division by zero and throw error if denominator is zero
  if (num2 === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }

  // Perform division
  const result = num1 / num2;
  alert(`Result: ${num1} / ${num2} = ${result}`);

} catch (error) {
  // Catch and display any error messages
  alert(error.message);
}
