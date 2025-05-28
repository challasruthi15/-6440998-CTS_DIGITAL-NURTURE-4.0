// Prompt user for a string
const input = prompt("Enter a string to check if it's a palindrome:");

if (!input) {
  alert("Please enter a valid string.");
} else {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // Check palindrome condition
  if (cleaned === reversed) {
    alert(`✅ "${input}" is a palindrome!`);
  } else {
    alert(`❌ "${input}" is not a palindrome.`);
  }
}
