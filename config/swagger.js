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
    tags: [
      { name: "user", description: "User API" },
      { name: "question", description: "Question API" },
      { name: "genre", description: "Genre API" },
    ],
    securityDefinitions: null,
    definitions: {
      User: {
        type: "object",
        required: ["name"],
        properties: {
          _id: { type: "string" },
          name: { type: "string" },
          answers: {
            type: "array",
            items: {
              type: "object",
              required: ["question_id", "answer", "is_correct"],
            },
          },
        },
      },
      Question: {
        type: "object",
        required: [
          "question_id",
          "genre_name",
          "audio_src",
          "video_src",
          "options",
        ],
        properties: {
          question_id: { type: "string" },
          genre_name: { type: "string" },
          audio_src: { type: "string" },
          video_src: { type: "string" },
          options: {
            type: "array",
            items: {
              type: "object",
              required: ["answer", "description", "is_correct"],
            },
          },
        },
      },
      Genre: {
        type: "object",
        required: ["genre_name"],
        properties: {
          _id: { type: "string" },
          genre_name: { type: "string" },
        },
      },
    },
  },
}

exports.getGenres = {
  description: "Operations about Genres",
  tags: ["genre"],
  summary: "Get all genres",
  produces: ["application/json"],
  response: {
    200: {
      description: "Successful genre's response",
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: { type: "string" },
          genre_name: { type: "string" },
        },
      },
    },
  },
}

exports.getQuestionByGenre = {
  description: "Operations about Questions",
  tags: ["question"],
  summary: "Get question by genre",
  produces: ["application/json"],
  params: {
    type: "object",
    required: ["genreName"],
    properties: {
      genreName: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful question's response",
      type: "object",
      properties: {
        _id: { type: "string" },
        question_id: { type: "string" },
        genre_name: { type: "string" },
        audio_src: { type: "string" },
        video_src: { type: "string" },
        options: {
          type: "array",
          items: {
            type: "object",
            required: ["answer", "description", "is_correct"],
            properties: {
              answer: { type: "string" },
              description: { type: "string" },
              is_correct: { type: "boolean" },
            },
          },
        },
      },
    },
  },
}

exports.createUser = {
  description: "Operations about Users",
  tags: ["user"],
  summary: "Create user",
  produces: ["application/json"],
  body: {
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful user's response",
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        answers: {
          type: "array",
          items: {
            type: "object",
            required: ["question_id", "answer", "is_correct"],
          },
        },
      },
    },
  },
}

exports.updateUserAnswer = {
  description: "Operations about Users",
  tags: ["user"],
  summary: "Update user's answer",
  produces: ["application/json"],
  body: {
    type: "object",
    required: ["userId", "questionId", "answer"],
    properties: {
      _id: { type: "string" },
      userId: { type: "string" },
      questionId: { type: "string" },
      answer: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful user's response",
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        answers: {
          type: "array",
          items: {
            type: "object",
            required: ["question_id", "answer", "is_correct"],
            properties: {
              _id: { type: "string" },
              question_id: { type: "string" },
              answer: { type: "string" },
              is_correct: { type: "boolean" },
            },
          },
        },
      },
    },
  },
}

exports.getUserById = {
  description: "Operations about Users",
  tags: ["user"],
  summary: "Get user by id",
  produces: ["application/json"],
  params: {
    type: "object",
    required: ["userId"],
    properties: {
      userId: { type: "string" },
    },
  },

  response: {
    200: {
      description: "Successful user's response",
      type: "object",
      properties: {
        _id: { type: "string" },
        name: { type: "string" },
        answers: {
          type: "array",
          items: {
            type: "object",
            required: ["question_id", "answer", "is_correct"],
          },
        },
      },
    },
  },
}
