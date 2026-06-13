const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String },
    rating: { type: String },
    price: { type: String, required: true },
    state: { type: String },
    best_time_to_visit: { type: String },
    category: { type: String, enum: ['Beaches', 'Hill Stations', 'Spiritual', 'Hidden Gems', 'Festivals', 'General'], default: 'General' },
    base_popularity_score: { type: Number, default: 0 },
    wishlist_count: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Tour', TourSchema);
