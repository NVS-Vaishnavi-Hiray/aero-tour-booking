const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

const router = express.Router();

// Create booking
router.post('/', auth, async (req, res) => {
    try {
        const { tour_id, travel_date, guests } = req.body;
        const booking = new Booking({
            user_id: req.user.id,
            tour_id,
            travel_date,
            guests
        });
        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get user bookings
router.get('/user', auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ user_id: req.user.id }).populate('tour_id');
        res.json(bookings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
