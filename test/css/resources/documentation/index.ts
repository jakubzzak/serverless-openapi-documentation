import models from "./models";

export default {
  version: "v2.0.0",
  title: "Css API",
  description: "API for the Customer Portal Area",
  contact: {
    name: "OPS - Customer Product Team",
    email: "ops.engineering@finn.auto"
  },
  versions: [
    {
      name: "v1",
      href: "api/v1/docs"
    },
    {
      name: "v2",
      href: "api/v2/docs"
    },
    {
      name: "v3",
      href: "api/v3/docs"
    },
    {
      name: "v4",
      href: "api/v4/docs"
    }
  ],
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
