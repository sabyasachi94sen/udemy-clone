import { useMutation, useQuery } from "@tanstack/react-query";

import { Account, ApiError, SuperAdminService } from "@/api";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface SuperAdminsResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}
export const useSuperAdmins = (params?: { page: number }) =>
  useQuery(
    [queryKeys.superAdmins.list(params?.page)],

    () => SuperAdminService.superAdminList({ ...params }),
  );

export function useCreateSuperAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();

  return useMutation<
    Account,
    ApiError,
    {
      data: Account;
    }
  >((data) => SuperAdminService.superAdminCreate(data), {
    onSuccess() {
      // invalidate all the list queries

      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.superAdmins.list._def,
      });

      onSuccess?.();
    },
    onError(err) {
      console.log(err);
    },
  });
}

export function useUpdateSuperAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();

  return useMutation<
    Account,
    ApiError,
    {
      id: number;
      data: Account;
    }
  >((data) => SuperAdminService.superAdminPartialUpdate(data), {
    onSuccess() {
      // invalidate all the list queries

      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.superAdmins.list._def,
      });

      onSuccess?.();
    },

    onError(err) {
      console.log(err);
    },
  });
}

export function useDeleteSuperAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();

  return useMutation<
    void,
    ApiError,
    {
      id: number;
    }
  >((data) => SuperAdminService.superAdminDelete(data), {
    onSuccess() {
      // invalidate all the list queries

      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.superAdmins.list._def,
      });

      onSuccess?.();
    },
    onError(err) {
      console.log(err);
    },
  });
}
