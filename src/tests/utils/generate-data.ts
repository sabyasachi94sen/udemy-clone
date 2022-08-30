import {faker} from "@faker-js/faker";

import { FAKER_SEED } from "@/shared/utils/constants";

import { db } from "../mocks/db";

faker.seed(FAKER_SEED);


/**
 * When we're doing a query and want to have some data in the db before test
 */
export const seedUser = (size = 10): void => {
  return new Array(size).fill(0).forEach(() => {
    db.user.create();
  });
};
