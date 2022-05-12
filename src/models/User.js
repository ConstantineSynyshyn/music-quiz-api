const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  score: Number,
  answers: [
    {
      questionId: String,
      answer: Number,
      isCorrect: Boolean,
    },
  ],
})

module.exports = mongoose.model("User", userSchema)
