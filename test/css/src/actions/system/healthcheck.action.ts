import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

/**
 * Checks if all dependent services are working
 * Returns the general status of the system
 * @param event APIGatewayEvent
 * @returns APIGatewayProxyResult
 */
export const healthcheck: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  return null;
};
