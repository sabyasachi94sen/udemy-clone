/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Account, AdminService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface AdminsResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}
export const useAdmins = (
  params?: { page?: number },
  // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
  queryOptions?: { keepPreviousData?: boolean },
) =>
  useQuery(
    queryKeys.admins.list(params?.page),

    () => AdminService.adminList({ ...params }),
    {
      keepPreviousData: true,
      ...queryOptions,
    },
  );


  export const useAdminActivity = (
     adminId
  ) =>
    useQuery(
      queryKeys.admins_activity.list(1),
  
      () => AdminService.adminActivity(adminId),
     
    );




export function useCreateAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    Account,
    ApiError,
    {
      data: Account;
    }
  >((data) => AdminService.adminCreate(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.admins.list._def,
      });

      toast.success("admin user created successfully");

      onSuccess?.();
    },
    onError(err) {
      displayErrorMessages(err);
    },
  });
}

export function useUpdateAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    Account,
    ApiError,
    {
      id: number;
      data: Account;
    }
  >((data) => AdminService.adminUpdate(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.admins.list._def,
      });

      toast.success("Admin user updated successfully");
      onSuccess?.();
    },

    onError(err) {
      displayErrorMessages(err);
    },
  });
}

export function useDeleteAdmin(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    void,
    ApiError,
    {
      id: number;
    }
  >((data) => AdminService.adminDelete(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.admins.list._def,
      });

      toast.success("Admin user deleted successfully");
      onSuccess?.();
    },

    onError(err) {
      displayErrorMessages(err);
    },
  });
}




