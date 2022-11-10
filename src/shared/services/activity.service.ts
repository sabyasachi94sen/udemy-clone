/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Account, ActivityApiService, ApiError ,ActionMapApiService} from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface AdminsResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}
export const useActivityList = (
  params?: { page?: number },
  // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
  queryOptions?: { keepPreviousData?: boolean },
) =>
  useQuery(
    queryKeys.activity.list(params?.page),

    () => ActivityApiService.activityApiList({ ...params }),
    {
      keepPreviousData: true,
      ...queryOptions,
    },
  );


  export const useActionMapList = (
    id
  ) =>
    useQuery(
      queryKeys.activity_action_map.list(1),
  
      () => ActionMapApiService.actionMapApiList(id),
      
    );

  

  export function useCreateActionMapStep(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      Account,
      ApiError,
      {
        
        data: Account;
      }
    >((data) => ActionMapApiService.actionMapApiCreate(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.activity_action_map.list._def,
        });
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.activity.list._def,
        });

  
        toast.success("Action Map created successfully");
  
        onSuccess?.();
      },
      onError(err,data) {

        toast.error(err.data.message);
      
      },
});

 }



 export function useUpdateActionMapStep(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    Account,
    ApiError,
    {
      
      data: Account;
      action_step_id: number;
    }
  >((data) => ActionMapApiService.actionMapApiUpdate(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.activity_action_map.list._def,
      });

      toast.success("Edit step successfully");

      onSuccess?.();
    },
    onError(err) {
      displayErrorMessages(err);
    },
});

}




export function useDeleteActionMapStep(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    void,
    ApiError,
    {
      id: number;
    }
  >((data) => ActionMapApiService.actionMapApiDelete(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.activity_action_map.list._def,
      });
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.activity.list._def,
      });

      toast.success("Action step deleted successfully");
      onSuccess?.();
    },

    onError(err) {
      displayErrorMessages(err);
    },
  });
}

export function useCreateActivity(onSuccess?: () => void) {
  const { refreshQuery } = useRefreshQuery();
  const { displayErrorMessages } = useBackendErrors();

  return useMutation<
    Account,
    ApiError,
    {
      
      data: Account;
    }
  >((data) => ActivityApiService.activityApiCreate(data), {
    onSuccess() {
      // invalidate all the list queries
      refreshQuery({
        // eslint-disable-next-line no-underscore-dangle
        queryKey: queryKeys.activity.list._def,
      });

      toast.success("Activity created successfully");

      onSuccess?.();
    },
    onError(err,data) {
      const checkCreds=checkProperties(data.data)
      
    
      if(checkCreds)
      toast.error("Please enter all fields")
      else
      toast.error("Please enter a valid url ex: https://www.eoraa.com")
    },
});

}


export function useUpdateActivity(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      Account,
      ApiError,
      {
        id:number,
        data: Account;
      }
    >((data) => ActivityApiService.activityApiUpdate(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.activity.list._def,
        });
  
        toast.success("activity updated successfully");
  
        onSuccess?.();
      },
      onError(err) {
        toast.error("Please enter a valid url")
      },
});

 }


 export function useDeleteActivity(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      void,
      ApiError,
      {
        id: number;
      }
    >((data) => ActivityApiService.activityApiDelete(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.activity.list._def,
        });
  
        toast.success("Activity deleted successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }


  function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] == "")
            return true;
    }
    return false;
  }
  


  