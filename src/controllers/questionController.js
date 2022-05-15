const boom = require("boom")

const Question = require("../models/Question")

exports.getQuestionByGenre = async (req, reply) => {
  try {
    const genre_name = req.params.genreName

    if (!genre_name) {
      return reply.send(
        boom.badRequest(`Can not find question for ${genre_name}`)
      )
    }

    const question = await Question.findOne({ genre_name })
    return question
  } catch (err) {
    reply(boom.boomify(err))
  }
}
