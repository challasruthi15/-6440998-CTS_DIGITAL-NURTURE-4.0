<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>File Reading Example</title>
</head>
<body>
  <h2>Select a file to read</h2>
  <input type="file" id="fileInput" accept=".txt" />
  <pre id="fileContent" style="white-space: pre-wrap; border: 1px solid #ccc; padding: 10px;"></pre>

  <script>
    document.getElementById("fileInput").addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = function(e) {
        const content = e.target.result;
        console.log("File contents:");
        const lines = content.split(/\r?\n/);
        lines.forEach((line, index) => {
          console.log(`Line ${index + 1}: ${line}`);
        });

        // Also display content on the page
        document.getElementById("fileContent").textContent = content;
      };

      reader.onerror = function() {
        alert("Error reading file.");
      };

      reader.readAsText(file);
    });
  </script>
</body>
</html>
