import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const queryKeys = createQueryKeyStore({
  users: null,
  superAdmins: {
    list: (page?: number) => [page],
  },
});
