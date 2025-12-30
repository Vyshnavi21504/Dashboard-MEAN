const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  label: { type: String, required: true }, // e.g., "January" or "Product A"
  value: { type: Number, required: true }, // e.g., 1250 (sales amount)
  category: { type: String, required: true }, // e.g., "Revenue", "Signups"
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);