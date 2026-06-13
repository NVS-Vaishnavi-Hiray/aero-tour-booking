const mongoose = require('mongoose');

const SearchLogSchema = new mongoose.Schema({
    search_query: { type: String },
    destination_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SearchLog', SearchLogSchema);
