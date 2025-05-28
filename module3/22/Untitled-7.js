<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>File Writing Example</title>
</head>
<body>
  <h2>Enter text to save in output.txt</h2>
  <textarea id="userInput" rows="5" cols="30" placeholder="Type something..."></textarea><br />
  <button id="saveBtn">Save to File</button>

  <script>
    document.getElementById("saveBtn").addEventListener("click", () => {
      const text = document.getElementById("userInput").value;
      if (!text) {
        alert("Please enter some text before saving.");
        return;
      }

      // Create a Blob with the text data
      const blob = new Blob([text], { type: "text/plain" });

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "output.txt";

      // Programmatically click the link to trigger download
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(link.href);

      alert("Data has been saved to output.txt (download started).");
    });
  </script>
</body>
</html>
