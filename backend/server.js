const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Require the upload middleware
const upload = require('./upload');

app.use(cors());

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

