// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

// Loop until user guesses correctly
while (true) {
  guess = parseInt(prompt("Guess the number (between 1 and 100):"), 10);
  attempts++;

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    continue;
  }

  if (guess === secretNumber) {
    alert(`🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts.`);
    break;
  } else if (guess < secretNumber) {
    alert("Too low! Try a higher number.");
  } else {
    alert("Too high! Try a lower number.");
  }
}
