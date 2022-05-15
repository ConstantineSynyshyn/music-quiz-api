const genreController = require("./controllers/genreController")
const questionController = require("./controllers/questionController")
const userController = require("./controllers/userController")
const swagger = require("../config/swagger")

const routes = [
  {
    method: "GET",
    url: "/genres",
    handler: genreController.getGenres,
    schema: swagger.getGenres,
  },
  {
    method: "GET",
    url: "/question/:genreName",
    handler: questionController.getQuestionByGenre,
    schema: swagger.getQuestionByGenre,
  },
  {
    method: "PUT",
    url: "/user",
    handler: userController.createUser,
    schema: swagger.createUser,
  },
  {
    method: "POST",
    url: "/user/answer",
    handler: userController.updateUserAnswer,
    schema: swagger.updateUserAnswer,
  },
  {
    method: "GET",
    url: "/user/:id",
    handler: userController.getUserById,
    schema: swagger.getUserById,
  },
]

module.exports = routes
