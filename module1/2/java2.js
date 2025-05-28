// Use const for event name and date (unchanging values)
const eventName = "Tech Conference 2025";
const eventDate = "June 15, 2025";

// Use let for seats (value will change)
let availableSeats = 100;

// Concatenate and display event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate registration
function registerParticipant() {
  if (availableSeats > 0) {
    availableSeats--; // Decrement seat count using --
    console.log("Registration successful!");
  } else {
    console.log("No seats available.");
  }

  // Display updated seat count
  console.log(`Updated Available Seats: ${availableSeats}`);
}

// Example: Register 3 participants
registerParticipant();
registerParticipant();
registerParticipant();
