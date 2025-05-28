// Prompt the user for a string
const inputString = prompt("Enter a string to reverse:");

// Check if input is valid
if (inputString === null || inputString === "") {
  alert("Please enter a valid string.");
} else {
  let reversedString = "";

  // Loop from end to start and build reversed string
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  // Display the reversed string
  alert(`Reversed string: ${reversedString}`);
}
