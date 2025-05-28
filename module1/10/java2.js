const events = [
  { id: 1, name: "Workshop on Baking", category: "Cooking", capacity: 5, registered: 2 },
  { id: 2, name: "Jazz Music Night", category: "Music", capacity: 3, registered: 1 },
  { id: 3, name: "Rock Concert", category: "Music", capacity: 10, registered: 7 },
  { id: 4, name: "Painting Class", category: "Art", capacity: 7, registered: 0 }
];

// Function with default parameter, uses spread operator to clone before filtering
const filterEvents = (eventList, category = "All") => {
  const clonedEvents = [...eventList];
  return category === "All"
    ? clonedEvents
    : clonedEvents.filter(({ category: cat }) => cat === category);
};

// Function to display event info using destructuring
const displayEvents = (eventsToDisplay) => {
  eventsToDisplay.forEach(({ name, category, registered, capacity }) => {
    console.log(`${name} (${category}) - Registered: ${registered}/${capacity}`);
  });
};

// Example usage:
const musicEvents = filterEvents(events, "Music");
displayEvents(musicEvents);
