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
          path:
            "api/v4/health/customers/{customer_id}/subscriptions/{subscription_id}",
          documentation: healthCheckDoc()
        }
      },
      {
        http: {
          method: "get",
          path: "api/v4/health/customers/{customer_id}/drivers/{driver_id}",
          documentation: healthCheckDoc({
            pathParams: [
              {
                name: "customer_id",
                description: "My customer description",
                schema: {
                  type: "string"
                }
              }
            ]
          })
        }
      },
      {
        http: {
          method: "get",
          path: "api/v4/health/customers/{customer_id}/deals/{deal_id}",
          documentation: healthCheckDoc({
            pathParams: [
              {
                name: "customer_id",
                description: "My customer description",
                schema: {
                  type: "string"
                }
              },
              {
                name: "deal_id",
                description: "My deal description",
                schema: {
                  type: "string",
                  pattern: "^[1-9]+$"
                }
              }
            ]
          })
        }
      }
    ]
  }
};
