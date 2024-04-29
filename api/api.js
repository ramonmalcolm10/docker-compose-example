const express = require('express');

const app = express();
const port = 3000;

// Define a sample endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}/api`);
});