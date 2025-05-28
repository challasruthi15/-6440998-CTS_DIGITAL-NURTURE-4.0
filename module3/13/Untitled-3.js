// Recursive function to calculate nth Fibonacci number
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Prompt the user for a positive integer
const input = prompt("Enter a positive integer (n) to get the nth Fibonacci number:");
const n = parseInt(input, 10);

// Validate input
if (isNaN(n) || n < 0) {
  alert("Please enter a valid positive integer.");
} else {
  const result = fibonacci(n);
  alert(`The ${n}th Fibonacci number is: ${result}`);
}
