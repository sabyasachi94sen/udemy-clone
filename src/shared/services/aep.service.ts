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

    
       export function useAepActivityComplete(onSuccess?: () => void) {
        const { refreshQuery } = useRefreshQuery();
        const { displayErrorMessages } = useBackendErrors();
      
        return useMutation<
          void,
          ApiError,
          {
            activity_id:number,
            student_id:number
          }
        >((data) => AepService.aepActivityComplete(data), {
          onSuccess(data) {
            // invalidate all the list queries
         

              window.location.href=`/academic-list/${data?.student?.id}`
           
           
            onSuccess?.();
          },
      
          onError(err) {
             toast.error("Internal server error")
          },
        })

      }


    export const useAepActivity = (
        studentId
     ) =>
       useQuery(
         queryKeys.aep_activity.list(1),
     
         () => AepService.aepActivity(studentId),
        
       );

       export const useAepChoice = (
      
     ) =>
       useQuery(
         queryKeys.aep_activity_choice.list(1),
     
         () => AepService.aepChoice(),
        
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
          onSuccess(data) {
            // invalidate all the list queries

            if(data.length===0)
            toast.error("No activities in the database meet these search criteria")
           
           
            onSuccess?.();
          },
      
          onError(err) {
            toast.error("No activities in the database meet these search criteria")
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
       
        toast.error("Selected Activity doesnt contains proper action maps. Please refer Activity Database")
      },
    });








    
}
   