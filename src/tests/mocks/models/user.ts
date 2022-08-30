import {faker} from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

export const User = {
  id: primaryKey(faker.datatype.string),
  first_name: faker.datatype.string,
  last_name: faker.datatype.string,
  email: faker.datatype.string,
  type: faker.datatype.string,
  created_at: faker.datatype.datetime,
};
