function createEventManager() {
  const events = [];
  const registrations = {}; // { categoryName: totalRegistrations }

  // Add an event
  function addEvent(event) {
    // event = { id, name, category }
    events.push(event);
    if (!registrations[event.category]) {
      registrations[event.category] = 0;
    }
  }

  // Register a user for an event and track registration count by category using closure
  function registerUser(eventId, user) {
    const event = events.find(e => e.id === eventId);
    if (!event) {
      console.log("Event not found");
      return;
    }

    // Let's say we track registered users on event object for simplicity
    event.registeredUsers = event.registeredUsers || [];
    event.registeredUsers.push(user);

    // Increment registration count for the event category
    registrations[event.category]++;
  }

  // Closure to get total registrations for a category
  function getRegistrationsByCategory(category) {
    return registrations[category] || 0;
  }

  // Filter events by category dynamically using a callback
  function filterEventsByCategory(category, callback) {
    const filtered = events.filter(event => event.category === category);
    return callback ? callback(filtered) : filtered;
  }

  return {
    addEvent,
    registerUser,
    filterEventsByCategory,
    getRegistrationsByCategory,
  };
}

// Usage example
const eventManager = createEventManager();

eventManager.addEvent({ id: 1, name: "Music Fest", category: "Music" });
eventManager.addEvent({ id: 2, name: "Art Expo", category: "Art" });
eventManager.addEvent({ id: 3, name: "Rock Concert", category: "Music" });

eventManager.registerUser(1, { name: "Alice" });
eventManager.registerUser(1, { name: "Bob" });
eventManager.registerUser(3, { name: "Charlie" });

console.log("Music Events:", eventManager.filterEventsByCategory("Music", events => events.map(e => e.name)));
// Output: Music Events: [ 'Music Fest', 'Rock Concert' ]

console.log("Total Music registrations:", eventManager.getRegistrationsByCategory("Music")); 
// Output: Total Music registrations: 3

console.log("Art Events:", eventManager.filterEventsByCategory("Art"));
