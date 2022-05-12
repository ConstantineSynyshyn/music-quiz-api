const mongoose = require("mongoose")

const quesstionSchema = new mongoose.Schema({
  question_id: String,
  question: String,
  genre_name: String,
  options: [
    {
      value: String,
      description: String,
      isCorrect: Boolean,
    },
  ],
})

module.exports = mongoose.model("Question", quesstionSchema)
