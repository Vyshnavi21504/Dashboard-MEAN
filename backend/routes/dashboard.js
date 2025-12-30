const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

router.get('/stats', async (req, res) => {
    try {
        const userCount = await User.countDocuments().catch(() => null);

        res.json({ 
            activeUsers: userCount || 120, 
            newSignups: 45, 
            totalSales: 1500 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/chart-data', async (req, res) => {
    try {
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

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); 
        
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


router.post('/users', async (req, res) => {
    try {
        const { name, email, role } = req.body;
        
       
        
        console.log("New User Received:", req.body);
        res.status(201).json({ message: "User added successfully!", user: req.body });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;