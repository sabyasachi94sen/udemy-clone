import { factory } from "@mswjs/data";

import { User } from "./models/user";

export const db = factory({
  user: User,
});
