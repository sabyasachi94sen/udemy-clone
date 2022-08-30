import { setupServer } from "msw/node";

import { db } from "../mocks/db";
import { handlers } from "../mocks/handlers";

// const server = setupServer(...handlers);

// User data-model handlers from msw where applicable
const server = setupServer(...db.user.toHandlers("rest"), ...handlers);

export * from "msw";

export { server };
