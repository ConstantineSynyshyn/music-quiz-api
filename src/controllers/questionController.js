const boom = require("boom")

const Question = require("../models/Question")

exports.getQuestionByGenre = async (req, reply) => {
  try {
    const question_id = req.params.questionId

    if (!question_id) {
      return reply.send(boom.badRequest("Missing id"))
    }

    const question = await Question.findOne({ question_id })
    return question
  } catch (err) {
    reply(boom.boomify(err))
  }
}
