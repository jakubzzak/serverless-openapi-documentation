import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { readFileSync } from "fs";
import "source-map-support/register";

/**
 * Serves the API documentation
 * @returns APIGatewayProxyResult
 */
// eslint-disable-next-line @typescript-eslint/require-await
export const serveDocs: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  const spec = readFileSync("./openapi.json", { encoding: "utf8" });
  const body = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Docs: Customer Self Service API</title>
            <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
        </head>
        <body>
            <select id="availableVersions" name="versions"></select>
            <div id="swagger"></div>
            <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
            <script>
              let url = window.location.href
              let urlVersionRegex = /\\/v[1-9]\\//g
              let currentVersion = url.match(urlVersionRegex)?.[0]
              let availableVersions = Array.from(
                new Set(
                  Object.keys(${spec}.paths)
                  .map(path => path.match(urlVersionRegex)?.[0]?.substring(1, 3))
                )
              )
              .filter(path => path)
              .map(path => ({ name: path, href: 'api/' + path + '/docs' }))
              let reducedSpecPaths = currentVersion ? {} : ${spec}.paths

              if (currentVersion) {
                Object.keys(${spec}.paths)
                    .filter(path => path.includes(currentVersion))
                    .forEach(path => reducedSpecPaths[path] = ${spec}.paths[path]);
              }

              if (availableVersions.length > 1) {
                let versionDropdown = document.getElementById("availableVersions")
                let currentVersionOption = null
                availableVersions.forEach(version => {
                  let option = document.createElement("option");
                  option.value = version.href
                  option.text = version.name
                  if (currentVersion?.match(version.name)) {
                    option.disabled = true
                    currentVersionOption = option
                  }
                  versionDropdown.appendChild(option)
                })
                versionDropdown.value = currentVersionOption?.value
                versionDropdown.onchange = function ({ target }) {
                  window.location.pathname = target.value
                }
              } else {
                document.getElementById("availableVersions").style.display = "none";
              }

              SwaggerUIBundle({
                dom_id: '#swagger',
                spec: { ...${spec}, paths: reducedSpecPaths },
              });
            </script>
        </body>
        </html>`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body
  };
};
