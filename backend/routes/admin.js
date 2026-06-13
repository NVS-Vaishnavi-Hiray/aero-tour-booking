const express = require('express');
const Tour = require('../models/Tour');
const Booking = require('../models/Booking');
const User = require('../models/User');
const Message = require('../models/Message');
const SearchLog = require('../models/SearchLog');
const auth = require('../middleware/auth');

const router = express.Router();

// Admin Middleware
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') next();
    else res.status(403).json({ msg: 'Access denied' });
};

// Get Analytics
router.get('/analytics', [auth, isAdmin], async (req, res) => {
    try {
        const users = await User.countDocuments();
        const tours = await Tour.countDocuments();
        const bookings = await Booking.countDocuments();
        const messages = await Message.countDocuments();
        
        // Simplified top searched
        const topSearches = await SearchLog.aggregate([
            { $group: { _id: "$destination_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        res.json({ stats: { users, tours, bookings, messages }, topSearches });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
