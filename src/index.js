const fastify = require("fastify")({
  logger: true,
})

const routes = require("./routes")

const mongoose = require("mongoose")

routes.forEach((route) => {
  fastify.route(route)
})

const mongoUri =
  "mongodb+srv://admin:pepGGdNuSDq8su8U@cluster0.wt7hq.mongodb.net/music-quiz?retryWrites=true&w=majority"

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err))

fastify.get("/", async (request, reply) => {
  return { hello: "world" }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()