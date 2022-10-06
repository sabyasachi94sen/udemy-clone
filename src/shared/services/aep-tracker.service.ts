/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Account,AepTrackerService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface AdminsResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}



export const useAepTracker = (
    params?: { page?: number },
    // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    queryOptions?: { keepPreviousData?: boolean },
  ) =>
    useQuery(
      queryKeys.aep_tracker.list(params?.page),
  
      () => AepTrackerService.aepTrackerList({ ...params }),
      {
        keepPreviousData: true,
        ...queryOptions,
      },
    );


    export function useDeleteAepTracker(onSuccess?: () => void) {
      const { refreshQuery } = useRefreshQuery();
      const { displayErrorMessages } = useBackendErrors();
    
      return useMutation<
        void,
        ApiError,
        {
          activity_id : number,
          student_id : number
        }
      >((data) => AepTrackerService.aepTrackerDelete(data), {
        onSuccess() {
          // invalidate all the list queries
          refreshQuery({
            // eslint-disable-next-line no-underscore-dangle
            queryKey: queryKeys.aep_tracker.list._def,
          });
    
          toast.success("Aep Tracker user deleted successfully");
          onSuccess?.();
        },
    
        onError(err) {
          displayErrorMessages(err);
        },
      });
    }


    export function useUpdateComplete(onSuccess?: () => void) {
      const { refreshQuery } = useRefreshQuery();
      const { displayErrorMessages } = useBackendErrors();
    
      return useMutation<
        Account,
        ApiError,
        {
          is_completed:string
        }
      >((data) => AepTrackerService.updateComplete(data), {
        onSuccess() {
          // invalidate all the list queries
          refreshQuery({
            // eslint-disable-next-line no-underscore-dangle
            queryKey: queryKeys.aep_tracker.list._def,
          });
    
          toast.success("Completed successfully");
          onSuccess?.();
        },
    
        onError(err) {
          displayErrorMessages(err);
        },
      });
    }
    

