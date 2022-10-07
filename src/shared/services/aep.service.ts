/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Account,AepService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface AepResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}



export const useAepList = (
    params?: { page?: number },
    // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    queryOptions?: { keepPreviousData?: boolean },
  ) =>
    useQuery(
      queryKeys.aep.list(params?.page),
  
      () => AepService.aepList({ ...params }),
      {
        keepPreviousData: true,
        ...queryOptions,
      },
    );


    export const useAepActivity = (
        studentId
     ) =>
       useQuery(
         queryKeys.aep_activity.list(1),
     
         () => AepService.aepActivity(studentId),
        
       );


       
    export const useAepActivityFilter = (
        studentId
     ) =>
       useQuery(
         queryKeys.aep_activity_filter.list(1),
     
         () => AepService.aepActivityFilter(studentId),
        
       );

     

     export function useAepActivityAssignmentFilter(onSuccess?: () => void) {
        const { refreshQuery } = useRefreshQuery();
        const { displayErrorMessages } = useBackendErrors();
      
        return useMutation<
          void,
          ApiError,
          {
            id: number;
          }
        >((data) => AepService.aepActivityAssignmentFilter(data), {
          onSuccess() {
            // invalidate all the list queries
           
           
            onSuccess?.();
          },
      
          onError(err) {
            displayErrorMessages(err);
          },
        });
    }
    














       
export function useDeleteAepActivity(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      void,
      ApiError,
      {
        id: number;
      }
    >((data) => AepService.aepDelete(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.aep_activity.list._def,
        });
  
        toast.success("Activity deleted successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
}


export function useAepActivityAssignment(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      void,
      ApiError,
      {
        student_id: number
        activity_id: number
      }
    >((data) => AepService.aepActivityAssignment(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.aep_activity_filter.list._def,
        });
        refreshQuery({
            // eslint-disable-next-line no-underscore-dangle
            queryKey: queryKeys.aep_activity.list._def,
          });
  
        toast.success("Activity Assigned successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });








    
}
   