const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 as the default
const authenticate = require('./middleware/auth'); // Import the authentication middleware

// Middleware to parse JSON requests
app.use(express.json());

// Use the authentication middleware for all routes that require authentication
app.use('/secure', authenticate);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// This route is protected by the authentication middleware
app.get('/secure/data', (req, res) => {
  res.send('Secure data accessed!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});