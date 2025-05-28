// Define Event constructor function
function Event(id, name, category, capacity) {
  this.id = id;
  this.name = name;
  this.category = category;
  this.capacity = capacity;
  this.registeredUsers = [];
}

// Add checkAvailability method to prototype
Event.prototype.checkAvailability = function() {
  return this.registeredUsers.length < this.capacity;
};

// Create an instance of Event
const artExhibition = new Event(201, "Art Expo", "Art", 5);

// Register some users
artExhibition.registeredUsers.push("Alice");
artExhibition.registeredUsers.push("Bob");

// Use Object.entries() to list keys and values
const entries = Object.entries(artExhibition);

console.log("Event properties:");
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Check availability
console.log("Is there availability?", artExhibition.checkAvailability());
