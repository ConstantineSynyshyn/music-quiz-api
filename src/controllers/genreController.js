const boom = require("boom")

const Genre = require("../models/Genre")

exports.getGenres = async (req, reply) => {
  try {
    const genres = await Genre.find()

    if (genres.length === 0) {
      return boom.notFound("Genres not found")
    }

    return genres
  } catch (err) {
    return boom.boomify(err)
  }
}
