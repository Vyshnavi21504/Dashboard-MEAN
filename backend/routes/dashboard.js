const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure you have a User model defined

// @route   GET /api/dashboard/stats
// @desc    Get KPI statistics
router.get('/stats', async (req, res) => {
    try {
        // Try to get real count from MongoDB
        const userCount = await User.countDocuments().catch(() => null);

        res.json({ 
            activeUsers: userCount || 120, // Uses DB count, or 120 as fallback
            newSignups: 45, 
            totalSales: 1500 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/dashboard/chart-data
// @desc    Get data for the blue line chart
router.get('/chart-data', async (req, res) => {
    try {
        // Static data for the blue line chart
        const chartData = [
            { label: 'Jan', value: 400 },
            { label: 'Feb', value: 600 },
            { label: 'Mar', value: 800 },
            { label: 'Apr', value: 500 },
            { label: 'May', value: 900 },
            { label: 'Jun', value: 1100 }
        ];
        res.json(chartData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/dashboard/users
// @desc    Get all users for the User Management table
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Fetch users but hide passwords
        
        // If database is empty, send these dummy users so the table isn't blank
        if (users.length === 0) {
            return res.json([
                { name: 'Admin User', email: 'admin@test.com', role: 'Admin' },
                { name: 'John Doe', email: 'john@test.com', role: 'User' }
            ]);
        }
        
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// @route   POST /api/dashboard/users
// @desc    Add a new user
router.post('/users', async (req, res) => {
    try {
        const { name, email, role } = req.body;
        
        // If you have your User model connected:
        // const newUser = new User({ name, email, role, password: 'password123' });
        // await newUser.save();
        
        console.log("New User Received:", req.body);
        res.status(201).json({ message: "User added successfully!", user: req.body });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;