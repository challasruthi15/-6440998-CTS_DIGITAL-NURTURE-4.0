// Sample events data
const events = [
  { id: 1, name: "Workshop on Baking", capacity: 5, registered: 0 },
  { id: 2, name: "Jazz Music Night", capacity: 3, registered: 0 },
  { id: 3, name: "Rock Concert", capacity: 10, registered: 0 },
];

// Access container using querySelector
const container = document.querySelector("#eventsContainer");

// Function to render events dynamically
function renderEvents() {
  container.innerHTML = ""; // Clear existing content

  events.forEach(event => {
    // Create event card container
    const card = document.createElement("div");
    card.className = "event-card";

    // Event name/title
    const title = document.createElement("h3");
    title.textContent = event.name;
    card.appendChild(title);

    // Registration info
    const info = document.createElement("p");
    info.textContent = `Registered: ${event.registered} / Capacity: ${event.capacity}`;
    card.appendChild(info);

    // Register button
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.registered >= event.capacity;
    registerBtn.addEventListener("click", () => {
      if (event.registered < event.capacity) {
        event.registered++;
        renderEvents(); // Update UI
      }
    });
    card.appendChild(registerBtn);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.disabled = event.registered === 0;
    cancelBtn.addEventListener("click", () => {
      if (event.registered > 0) {
        event.registered--;
        renderEvents(); // Update UI
      }
    });
    card.appendChild(cancelBtn);

    // Append card to container
    container.appendChild(card);
  });
}

// Initial call to render
renderEvents();
