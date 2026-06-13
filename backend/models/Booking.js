const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
    travel_date: { type: Date, required: true },
    guests: { type: Number, required: true, min: 1 },
    status: { type: String, enum: ['CONFIRMED', 'CANCELLED'], default: 'CONFIRMED' },
    booking_time: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
