const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://clyde.at'
  ],
  methods: ['GET'],
  credentials: true
}));

// Serve static files from the Vue production build
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/download-resume', async (req, res) => {
  try {
    const response = await fetch(process.env.VUE_APP_RESUME_URL, {
      headers: {
        'Authorization': `Bearer ${process.env.VUE_APP_BLOB_READ_WRITE_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    res.status(500).send(`Failed to download resume: ${err.message}`);
  }
});

// Handle all other routes by serving the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
