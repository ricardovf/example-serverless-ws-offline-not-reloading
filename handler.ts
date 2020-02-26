import "source-map-support/register";
import * as AWS from "aws-sdk";

export const hello = async (event, _context) => {
  const endpoint = "http://localhost:3001";

  const aws = new AWS.ApiGatewayManagementApi({
    apiVersion: "2018-11-29",
    endpoint
  });

  if (event.requestContext.eventType === "MESSAGE") {
    await aws
      .postToConnection({
        ConnectionId: event.requestContext.connectionId,
        Data: JSON.stringify({ message: "hi" })
      })
      .promise();
  }

  return {
    statusCode: "200"
  };
};
