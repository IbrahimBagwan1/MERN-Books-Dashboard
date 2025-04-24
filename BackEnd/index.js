const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

// ✅ Enable CORS BEFORE routes
app.use(cors({
  origin: "http://localhost:3001" // Frontend usually runs on port 3001
}));

// Middleware
app.use(bodyParser.json());

// Routes
const bookRoutes = require('./routes/books');
app.use('/', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
