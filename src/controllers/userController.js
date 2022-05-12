const boom = require("boom")

const User = require("../models/User")

exports.createUser = async (req, reply) => {
  try {
    const { name } = req.body

    if (!name) {
      return reply.send(boom.badRequest("Missing name"))
    }

    const user = await User.create({ name })
    return user
  } catch (err) {
    reply.send(boom.boomify(err))
  }
}

exports.updateUserAnswer = async (req, reply) => {
  try {
    const { userId, questionId, answer } = req.body

    if (!userId || !questionId || !answer) {
      return reply.send(boom.badRequest("Missing userId, questionId or answer"))
    }

    const answeredQuestion = await Question.findOne({ question_id: questionId })

    const isCorrect =
      answeredQuestion.options.find((option) => option.isCorrect) === answer

    const user = await User.findByIdAndUpdate(userId, {
      $push: {
        answers: {
          questionId,
          answer,
          isCorrect,
        },
      },
    })

    if (!user) {
      return reply.send(boom.notFound(`Can not find user for id: ${userId}`))
    }

    return user
  } catch (err) {
    reply.send(boom.boomify(err))
  }
}

exports.getUserById = async (req, reply) => {
  try {
    const { id } = req.params

    if (!id) {
      return reply.send(boom.badRequest("Missing id"))
    }

    const user = await User.findById(id)

    if (!user) {
      return reply.send(boom.notFound(`Can not find user for id: ${id}`))
    }

    return user
  } catch (err) {
    return reply.send(boom.boomify(err))
  }
}
