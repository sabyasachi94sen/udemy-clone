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
  aep_tracker_status: {
    list: (page?: number) => [page],
  },
  aep: {
    list: (page?: number) => [page],
  },
  aep_activity: {
    list: (page?: number) => [page],
  },
  aep_activity_choice: {
    list: (page?: number) => [page],
  },
  aep_activity_filter: {
    list: (page?: number) => [page],
  },

   activity: {
    list: (page?: number) => [page],
  },
  activity_action_map: {
    list: (page?: number) => [page],
  },
  
  
  
  settings: {
    list: (page?: number) => [page],
  },
  

});
