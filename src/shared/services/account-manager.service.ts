/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


import { Account, AccountManagersService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface AccountManagerResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}
export const useAccountManager = (
  params?: { page?: number },

  // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
  queryOptions?: { keepPreviousData?: boolean },
) =>
  useQuery(
    queryKeys.account_manager.list(params?.page),

    () => AccountManagersService.accountManagersList({ ...params}),
    {
      keepPreviousData: true,
      ...queryOptions,
    },
  );

  export const useAccountManagerActivities = (studentId
   
    
    // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
   
  ) =>{
    
    useQuery(
   
        queryKeys.account_manager_student.list(1),
      () => AccountManagersService.accountManagerActivities(studentId),
    
      
    );
  }




export function useCreateAccountManager(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    Account,
    ApiError,
    {
      data: Account;
    }
  >((data) => AccountManagersService.accountManagerCreate(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.account_manager.list._def,
      });

      toast.success("Account user created successfully");

      onSuccess?.();
    },
    onError(err) {
      displayErrorMessages(err);
    },
  });
}

export function useUpdateAccountManager(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      Account,
      ApiError,
      {
        id: number;
        data: Account;
      }
    >((data) => AccountManagersService.accountManagerUpdate(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.account_manager.list._def,
        });
  
        toast.success("Account user updated successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }


  export function useDeleteAccountManager(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      void,
      ApiError,
      {
        id: number;
      }
    >((data) => AccountManagersService.accountManagerDelete(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.account_manager.list._def,
        });
  
        toast.success("Account user deleted successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }







// export function useDeleteSuperAdmin(onSuccess?: () => void) {
//   const { refreshQuery } = useRefreshQuery();
//   const { displayErrorMessages } = useBackendErrors();

//   return useMutation<
//     void,
//     ApiError,
//     {
//       id: number;
//     }
//   >((data) => SuperAdminService.superAdminDelete(data), {
//     onSuccess() {
//       // invalidate all the list queries
//       refreshQuery({
//         // eslint-disable-next-line no-underscore-dangle
//         queryKey: queryKeys.superAdmins.list._def,
//       });

//       toast.success("Super admin user deleted successfully");
//       onSuccess?.();
//     },

//     onError(err) {
//       displayErrorMessages(err);
//     },
//   });
// }
