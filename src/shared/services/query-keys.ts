import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const queryKeys = createQueryKeyStore({
  users: null,
  superAdmins: {
    list: (page?: number) => [page],
  },
  admins: {
    list: (page?: number) => [page],
  },
  admins_activity: {
    list: (page?: number) => [page],
  },

  account_manager: {
    list: (page?: number) => [page],
  },
  account_manager_student: {
    list: (page?: number) => [page],
  },
  student: {
    list: (page?: number) => [page],
  },
  account_manager_drop_down: {
    list: (page?: number) => [page],
  },
  aep_tracker: {
    list: (page?: number) => [page],
  },
  settings: {
    list: (page?: number) => [page],
  },
  

});
