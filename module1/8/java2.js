const events = [
  { id: 1, name: "Workshop on Baking", category: "Cooking", capacity: 5, registered: 0 },
  { id: 2, name: "Jazz Music Night", category: "Music", capacity: 3, registered: 0 },
  { id: 3, name: "Rock Concert", category: "Music", capacity: 10, registered: 0 },
  { id: 4, name: "Painting Class", category: "Art", capacity: 7, registered: 0 }
];

const container = document.querySelector("#eventsContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

let filteredEvents = [...events];

// Render events based on filteredEvents array
function renderEvents() {
  container.innerHTML = "";
  if (filteredEvents.length === 0) {
    container.textContent = "No events found.";
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("div");
    title.textContent = event.name;
    card.appendChild(title);

    const category = document.createElement("div");
    category.textContent = `Category: ${event.category}`;
    card.appendChild(category);

    const info = document.createElement("div");
    info.textContent = `Registered: ${event.registered} / Capacity: ${event.capacity}`;
    card.appendChild(info);

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.registered >= event.capacity;
    registerBtn.onclick = () => {
      if (event.registered < event.capacity) {
        event.registered++;
        renderEvents();
      }
    };
    card.appendChild(registerBtn);

    container.appendChild(card);
  });
}

// Filter events by selected category
function filterEvents() {
  const category = categoryFilter.value;
  filteredEvents = category === "All"
    ? [...events]
    : events.filter(event => event.category === category);
  // Clear search input on filter change
  searchInput.value = "";
  renderEvents();
}

// Search events by name on keydown
function searchEvents() {
  const query = searchInput.value.toLowerCase();
  filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(query) &&
    (categoryFilter.value === "All" || event.category === categoryFilter.value)
  );
  renderEvents();
}

// Attach event listeners
categoryFilter.onchange = filterEvents;
searchInput.onkeydown = searchEvents;

// Initial render
renderEvents();
