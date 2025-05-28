// Define custom exception by extending Error
class InvalidAgeException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeException";
  }
}

try {
  // Prompt user for age
  const ageInput = prompt("Enter your age:");
  const age = parseInt(ageInput, 10);

  if (isNaN(age)) {
    throw new Error("Invalid input: Please enter a number.");
  }

  // Throw custom exception if age < 18
  if (age < 18) {
    throw new InvalidAgeException("Age must be 18 or older.");
  }

  alert(`Welcome! Your age is ${age}.`);

} catch (error) {
  if (error instanceof InvalidAgeException) {
    alert(`Custom Exception Caught: ${error.message}`);
  } else {
    alert(`Error: ${error.message}`);
  }
}
