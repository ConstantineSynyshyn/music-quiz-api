exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Fastify API",
      description: "Music quiz API",
      version: "0.0.1",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
}
