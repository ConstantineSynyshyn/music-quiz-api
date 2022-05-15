const genreController = require("./controllers/genreController")
const questionController = require("./controllers/questionController")
const userController = require("./controllers/userController")

const routes = [
  {
    method: "GET",
    url: "/genres",
    handler: genreController.getGenres,
  },
  {
    method: "GET",
    url: "/question/:genreName",
    handler: questionController.getQuestionByGenre,
  },
  {
    method: "PUT",
    url: "/user",
    handler: userController.createUser,
  },
  {
    method: "POST",
    url: "/user/answer",
    handler: userController.updateUserAnswer,
  },
  {
    method: "GET",
    url: "/user/:id",
    handler: userController.getUserById,
  },
]

module.exports = routes
