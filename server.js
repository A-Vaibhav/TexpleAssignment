const express = require('express');
const app = express();
const port = 3001;

// Simple API endpoint
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// API endpoint for testing
app.get('/api', (req, res) => {
  res.json({ message: 'API is up and running!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
