const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  section: String, // Optional: e.g., "Math", "English"
});

module.exports = mongoose.model('Question', QuestionSchema);
