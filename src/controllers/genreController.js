const boom = require("boom")

const Genre = require("../models/Genre")

exports.getGenres = async (req, reply) => {
  try {
    const genres = await Genre.find()
    return genres
  } catch (err) {
    throw boom.boomify(err)
  }
}
