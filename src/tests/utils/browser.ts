import { setupWorker } from "msw";

import { db } from "../mocks/db";
import { handlers } from "../mocks/handlers";

// const server = setupServer(...handlers);

// User data-model handlers from msw where applicable
const worker = setupWorker(...db.user.toHandlers("rest"), ...handlers);

export * from "msw";

export { worker };
