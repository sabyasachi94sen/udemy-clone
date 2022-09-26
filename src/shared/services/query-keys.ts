import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const queryKeys = createQueryKeyStore({
  users: null,
  students: {
    list: (filters: unknown) => ({ filters }),
    search: (query: string, limit = 15) => [query, limit],
    todo: (todoId: string) => todoId,
  },
});
