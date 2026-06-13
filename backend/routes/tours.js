const express = require('express');
const Tour = require('../models/Tour');
const SearchLog = require('../models/SearchLog');

const router = express.Router();

// Get all tours
router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get trending tours
router.get('/trending', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category && category !== 'all') {
            query.category = category;
        }

        const tours = await Tour.find(query);
        // Simulate trending logic matching the PHP version
        const sorted = tours.map(tour => {
            const calculated_score = tour.base_popularity_score + (tour.wishlist_count * 2) + Math.random() * 10;
            return { ...tour._doc, calculated_score };
        }).sort((a, b) => b.calculated_score - a.calculated_score).slice(0, 10);

        const data = sorted.map((tour, index) => {
            let badge = '⭐ Popular';
            if (index < 3) badge = '🔥 Trending';
            else if (tour.calculated_score > 85) badge = '📈 Rising';
            return { ...tour, badge, trend_percentage: Math.floor(Math.random() * 35) + 10 };
        });

        res.json({ status: 'success', data });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get single tour
router.get('/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) return res.status(404).json({ msg: 'Tour not found' });
        
        // Log the search
        await new SearchLog({ destination_id: tour._id }).save();
        
        res.json(tour);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
