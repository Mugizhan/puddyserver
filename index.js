const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/user_router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Routes
app.use('/', router);

// Database Connection
mongoose.connect(MONGO_URI)
  .then(() => {
    // Start Server
    app.listen(PORT, () => {
    });
  })
  .catch(err => {
    console.error('DB Connection Error:', err);
  });
