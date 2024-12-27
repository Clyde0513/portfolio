const express = require('express');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
