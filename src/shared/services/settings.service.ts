/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


import { Account, UserService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";



export const useUserDetails = (
    params?: { page?: number },
  
    // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    queryOptions?: { keepPreviousData?: boolean },
  ) =>
    useQuery(
      queryKeys.settings.list(params?.page),
  
      () => UserService.userDetailsList({ ...params}),
      {
        keepPreviousData: true,
        ...queryOptions,
      },
    )

    export function useUpdateDetails(onSuccess?: () => void) {
        const { refreshQuery } = useRefreshQuery();
        const { displayErrorMessages } = useBackendErrors();
      
        return useMutation<
          Account,
          ApiError,
          {
         
            data: Account;
          }
        >((data) => UserService.userUpdate(data), {
          onSuccess() {
            // invalidate all the list queries
            refreshQuery({
              // eslint-disable-next-line no-underscore-dangle
              queryKey: queryKeys.settings.list._def,
            });
      
            toast.success("User updated successfully");
            onSuccess?.();
          },
      
          onError(err) {
            displayErrorMessages(err);
          },
        });
      }