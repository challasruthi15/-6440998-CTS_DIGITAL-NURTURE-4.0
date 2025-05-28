<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AJAX Registration</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; padding: 1rem; }
    form div { margin-bottom: 1rem; }
    label { display: block; margin-bottom: 0.3rem; }
    input, select {
      width: 100%;
      padding: 0.4rem;
      font-size: 1rem;
    }
    .message {
      margin-top: 1rem;
      padding: 0.5rem;
      font-weight: bold;
    }
    .success { color: green; }
    .error { color: red; }
  </style>
</head>
<body>

  <h2>Register for an Event</h2>
  <form id="registrationForm">
    <div>
      <label>Name:</label>
      <input type="text" name="name" required />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name="email" required />
    </div>
    <div>
      <label>Event:</label>
      <select name="event" required>
        <option value="">Select Event</option>
        <option value="baking">Workshop on Baking</option>
        <option value="jazz">Jazz Music Night</option>
        <option value="art">Painting Class</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>

  <div id="message" class="message"></div>

  <script>
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      messageDiv.textContent = '';
      messageDiv.className = 'message';

      const { name, email, event: eventField } = form.elements;

      const userData = {
        name: name.value.trim(),
        email: email.value.trim(),
        event: eventField.value
      };

      // Simulate delay
      messageDiv.textContent = "Sending registration...";
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          if (!response.ok) throw new Error('Failed to register');
          return response.json();
        })
        .then(data => {
          messageDiv.textContent = `Thank you for registering, ${userData.name}!`;
          messageDiv.classList.add('success');
          form.reset();
        })
        .catch(error => {
          messageDiv.textContent = `Error: ${error.message}`;
          messageDiv.classList.add('error');
        });
      }, 1500); // simulate 1.5s server delay
    });
  </script>

</body>
</html>
