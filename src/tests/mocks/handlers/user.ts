import {faker} from "@faker-js/faker";
import { rest } from "msw";

import { APP_API_ENDPOINT } from "@/config";
import { FAKER_SEED } from "@/shared/utils/constants";

import { db } from "../db";

// (Optional) Seed `faker` to ensure reproducible
// random values of model properties.
faker.seed(FAKER_SEED);

const BASE_ROUTE = "user";

export const userHandlers = [
  rest.get(`${APP_API_ENDPOINT}/${BASE_ROUTE}`, (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];
