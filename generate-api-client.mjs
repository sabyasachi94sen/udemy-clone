#! /usr/bin/env node

import { $, chalk, question } from "zx";
import fs from "node:fs/promises";

$.verbose = false;

/**
 * We're doing this because the generated api client is not exporting the ApiError class
 * and we need it to be able to handle errors properly.
 * Plus, we don't export core once the client is generated
 * As the backend lacks proper open API support, we will declare models and services in API... folder
 * and export them from the index.ts file, to keep the imports clean
 */

/**
 * if permission denied, run the following command
 * chmod +x ./generate-api-client.mjs
 *
 * else
 * ./generate-api-client.mjs
 */
const dataToWrite = `export { ApiError } from "./core/ApiError";
export { CancelablePromise } from "./core/CancelablePromise"
export { OpenAPI } from "./core/OpenAPI";
export * from "./custom-models";
export * from "./custom-services";
`;

try {
  console.log(chalk.green("Regenerating API Client..."));
  await $`npm run generate:api`;

  await fs.writeFile("./src/api/index.ts", dataToWrite, { flag: "a+" });
} catch (error) {
  console.error(chalk.red(error));
  process.exit(1);
}
