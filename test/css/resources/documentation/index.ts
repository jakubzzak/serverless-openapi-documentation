import models from "./models";

export default {
  version: "v2.0.0",
  title: "Css API",
  description: "API for the Customer Portal Area",
  contact: {
    name: "OPS - Customer Product Team",
    email: "ops.engineering@finn.auto"
  },
  models,
  securitySchemes: {
    authToken: {
      type: "apiKey",
      name: "__Secure-next-auth.session-token",
      in: "cookie"
    }
  },
  security: [
    {
      authToken: []
    }
  ],
  servers: [
    {
      url: "https://finn.auto",
      description: "Development server"
    },
    {
      url: "https://finn.auto",
      description: "Staging server"
    },
    {
      url: "https://finn.auto",
      description: "Production server"
    }
  ]
};
