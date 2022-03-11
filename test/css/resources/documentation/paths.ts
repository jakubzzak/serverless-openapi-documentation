import { Operation, DocParams } from "../../../../src/types";

const methodResponseTypes = {
  unauthorized: {
    statusCode: 401,
    responseBody: {
      description: "Unauthorized"
    },
    responseModels: {
      "application/json": "UnauthorizedResponse"
    }
  },
  forbidden: {
    statusCode: 403,
    responseBody: {
      description: "Forbidden"
    },
    responseModels: {
      "application/json": "ForbiddenResponse"
    }
  },
  failedDependency: {
    statusCode: 424,
    responseBody: {
      description: "System down: Failed dependency"
    },
    responseModels: {
      "application/json": "GeneralResponse"
    }
  },
  badGateway: {
    statusCode: 502,
    responseBody: {
      description: "502 Server Error"
    },
    responseModels: {
      "application/json": "GeneralResponse"
    }
  }
};

export const healthCheckDoc = (extraParams?: DocParams): Operation => {
  return {
    summary: "Health check",
    description: "Health check endpoint",
    tags: ["system"],
    methodResponses: [
      {
        statusCode: 200,
        responseBody: {
          description: "200 OK"
        },
        responseModels: {
          "application/json": "GeneralResponse"
        }
      },
      methodResponseTypes.failedDependency,
      methodResponseTypes.badGateway
    ],
    ...extraParams
  };
};

export const getProfileDoc = (extraParams?: DocParams): Operation => {
  return {
    summary: "Get Customer Profile",
    description: "Get Customer Profile",
    tags: ["customers"],
    methodResponses: [
      {
        statusCode: 200,
        responseBody: {
          description: "Profile fetched successfully"
        },
        responseModels: {
          "application/json": "Customer"
        }
      },
      methodResponseTypes.unauthorized,
      methodResponseTypes.forbidden,
      methodResponseTypes.badGateway
    ],
    ...extraParams
  };
};
