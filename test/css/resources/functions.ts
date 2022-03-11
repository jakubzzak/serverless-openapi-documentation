import { healthCheckDoc } from "./documentation/paths";

export default {
  serveDocs: {
    handler: "handlers/system/serve-docs.handler",
    events: [
      {
        http: {
          method: "get",
          path: "api/v1/docs"
        }
      },
      {
        http: {
          method: "get",
          path: "api/v2/docs"
        }
      },
      {
        http: {
          method: "get",
          path: "api/v3/docs"
        }
      },
      {
        http: {
          method: "get",
          path: "api/v4/docs"
        }
      }
    ]
  },
  healthcheck: {
    handler: "handlers/system/healthcheck.handler",
    events: [
      {
        http: {
          method: "get",
          path: "api/v1/health",
          documentation: healthCheckDoc()
        }
      },
      {
        http: {
          method: "get",
          path: "api/v2/health",
          documentation: healthCheckDoc({
            version: 2
          })
        }
      },
      {
        http: {
          method: "get",
          path: "api/v3/health",
          documentation: healthCheckDoc({
            deprecated: true
          })
        }
      },
      {
        http: {
          method: "get",
          path: "api/v4/health",
          documentation: healthCheckDoc()
        }
      }
    ]
  }
};
