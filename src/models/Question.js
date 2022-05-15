const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
  question_id: String,
  genre_name: String,
  audio_src: String,
  video_src: String,
  options: [
    {
      answer: String,
      description: String,
      is_correct: Boolean,
    },
  ],
})

module.exports = mongoose.model("Question", questionSchema)
