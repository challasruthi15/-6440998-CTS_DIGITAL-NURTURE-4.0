// Prompt user for first number and convert to a float
const num1 = parseFloat(prompt("Enter the first number:"));

// Prompt user for second number and convert to a float
const num2 = parseFloat(prompt("Enter the second number:"));

// Ask for the operation
const operation = prompt("Choose an operation: +, -, *, /");

// Variable to store result
let result;

switch(operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      alert("Error: Division by zero is not allowed.");
      result = null;
    } else {
      result = num1 / num2;
    }
    break;
  default:
    alert("Invalid operation selected.");
    result = null;
}

// Show result if valid
if (result !== null) {
  alert(`Result: ${num1} ${operation} ${num2} = ${result}`);
}
