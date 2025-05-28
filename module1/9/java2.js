const spinner = document.getElementById('spinner');
const container = document.getElementById('eventsContainer');
const mockAPI = 'https://jsonplaceholder.typicode.com/posts?_limit=5'; // mock endpoint

// Function to render events
function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const div = document.createElement('div');
    div.textContent = event.title || event.name || JSON.stringify(event);
    container.appendChild(div);
  });
}

// Fetch with .then() and .catch()
function fetchWithThen() {
  spinner.style.display = 'block';
  container.innerHTML = '';
  fetch(mockAPI)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      spinner.style.display = 'none';
      renderEvents(data);
    })
    .catch(error => {
      spinner.style.display = 'none';
      container.textContent = `Error: ${error.message}`;
    });
}

// Fetch with async/await
async function fetchWithAsyncAwait() {
  spinner.style.display = 'block';
  container.innerHTML = '';
  try {
    const response = await fetch(mockAPI);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    spinner.style.display = 'none';
    renderEvents(data);
  } catch (error) {
    spinner.style.display = 'none';
    container.textContent = `Error: ${error.message}`;
  }
}
