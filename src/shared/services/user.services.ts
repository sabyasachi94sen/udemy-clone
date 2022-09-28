import { useQuery } from "react-query";

import { SuperAdminResObj } from "@/features/api";

import { queryKeys } from "./query-keys";

export const useSuperAdmin = (params: { page: number }) =>
  useQuery(
    [queryKeys.superAdmins.list(params.page)],

    () => SuperAdminResObj.super_admin_info_list(),
    // MatchService.getMyMatchByCustomerIdForUserMatchMyMatchesUserCustomerIdGet(
    //   params,
    // ),
  );
