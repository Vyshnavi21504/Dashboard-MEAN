const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Enhanced Middleware
app.use(express.json());

// Configure CORS to be more explicit (helps with Status 0 errors)
app.use(cors({
  origin: 'http://localhost:4200', // Allow your Angular app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. MongoDB Connection
// Added connection options for stability
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop server if DB connection fails
  });

// 3. Health Check Route (Use this to test in browser: http://localhost:5000/)
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// 4. Routes
// Make sure these files exist in your /routes folder!
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));

// 5. Global Error Handler
// This prevents the server from crashing and sends a real error back to Angular
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Internal Server Error',
    error: err.message 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});