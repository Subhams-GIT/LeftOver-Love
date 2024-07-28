const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Form = require('../Backend/Schema');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });


mongoose.connect('')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


  app.post('/submit-form', async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.file);
  
      const { title, description, typeoffood, quantity } = req.body;
      const photo = req.file ? req.file.filename : null;
  
      // Validate incoming data
      if (!title || !description || !typeoffood || !quantity) {
        return res.status(400).json({ message: 'All required fields must be provided' });
      }
  
      // Create a new form entry
      await Form.create({ title, description, typeoffood, quantity, photo });
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'An error occurred while submitting the form' });
    }
  });

app.get('/form-data', async (req, res) => {
  try {
    const formData = await Form.find();
    res.status(200).json(formData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve form data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});