const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const connectDB = require('../Backend/config/db');

const formRoutes = require('./Backend/routes/formRoutes');
const receiverRoutes = require('./Backend/routes/receiverRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'Backend/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Use routes
app.use('/api', formRoutes);
app.use('/api', receiverRoutes);

// Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
