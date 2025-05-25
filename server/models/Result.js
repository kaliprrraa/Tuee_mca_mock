const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  breakdown: Object,
  total: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", resultSchema);
