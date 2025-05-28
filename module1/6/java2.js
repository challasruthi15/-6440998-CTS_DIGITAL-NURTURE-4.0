// Array to hold all events
const events = [];

// Add new events using push()
events.push(
  { id: 1, name: "Workshop on Baking", category: "Cooking" },
  { id: 2, name: "Jazz Music Night", category: "Music" },
  { id: 3, name: "Rock Concert", category: "Music" },
  { id: 4, name: "Painting Class", category: "Art" }
);

// Filter to show only music events
const musicEvents = events.filter(event => event.category === "Music");

// Map to format display strings (e.g., "Workshop on Baking")
const formattedEvents = events.map(event => `${event.name}`);

// For demonstration:
console.log("All Events:");
formattedEvents.forEach(event => console.log(event));

console.log("\nMusic Events:");
musicEvents.forEach(event => console.log(event.name));
