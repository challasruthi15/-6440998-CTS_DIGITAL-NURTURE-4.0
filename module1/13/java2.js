<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Debug Registration Form</title>
  <style>
    body { font-family: sans-serif; padding: 1rem; max-width: 500px; }
    .message { margin-top: 1rem; font-weight: bold; }
    .error { color: red; }
    .success { color: green; }
  </style>
</head>
<body>

  <h2>Event Registration (Debug Mode)</h2>
  <form id="registrationForm">
    <div>
      <label>Name:</label>
      <input type="text" name="name" />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name="email" />
    </div>
    <div>
      <label>Event:</label>
      <select name="event">
        <option value="">--Select Event--</option>
        <option value="baking">Workshop on Baking</option>
        <option value="music">Jazz Night</option>
      </select>
    </div>
    <button type="submit">Register</button>
  </form>

  <div id="message" class="message"></div>

  <script>
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      console.clear(); // Clear old logs
      console.log('Form submitted');

      const { name, email, event: eventSelect } = form.elements;

      console.log('Captured Inputs:');
      console.log('Name:', name.value);
      console.log('Email:', email.value);
      console.log('Event:', eventSelect.value);

      const userData = {
        name: name.value.trim(),
        email: email.value.trim(),
        event: eventSelect.value
      };

      // Input validation
      if (!userData.name || !userData.email || !userData.event) {
        console.warn('Validation failed: Missing input');
        messageDiv.textContent = 'Please fill all fields.';
        messageDiv.className = 'message error';
        return;
      }

      // Log the data before sending
      console.log('Prepared Payload:', userData);

      // Simulate delayed fetch with debug logs
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          console.log('Fetch response status:', response.status);
          return response.json();
        })
        .then(data => {
          console.log('Server responded with:', data);
          messageDiv.textContent = `Registration successful for ${userData.name}`;
          messageDiv.className = 'message success';
          form.reset();
        })
        .catch(err => {
          console.error('Fetch error:', err);
          messageDiv.textContent = 'Something went wrong during registration.';
          messageDiv.className = 'message error';
        });
      }, 1000);
    });
  </script>

</body>
</html>
