/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Account, StudentService, ApiError } from "@/api";
import { useBackendErrors } from "@/shared/hooks/use-backend-errors";
import { useRefreshQuery } from "@/shared/hooks/use-refresh-query";

import { queryKeys } from "./query-keys";

export interface StudentResp {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Account>;
}
export const useStudent = (
  params?: { page?: number },
  // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
  queryOptions?: { keepPreviousData?: boolean },
) =>
  useQuery(
    queryKeys.student.list(params?.page),

    () => StudentService.studentList({ ...params }),
    {
      keepPreviousData: true,
      ...queryOptions,
    },
  );


  export const useAccountManagerDropDownList = (
    params?: { page?: number },
    // https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    queryOptions?: { keepPreviousData?: boolean },
  ) =>
    useQuery(
      queryKeys.account_manager_drop_down.list(params?.page),
  
      () => StudentService.accountManagerList({ ...params }),
      {
        keepPreviousData: true,
        ...queryOptions,
      },
    );








  export function useCreateStudent(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      Account,
      ApiError,
      {
        data: Account;
      }
    >((data) => StudentService.studentRegisterCreate(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.student.list._def,
        });
  
        toast.success("Student created successfully");
  
        onSuccess?.();
      },
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }


  export function useUpdateStudent(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      Account,
      ApiError,
      {
        id: number;
        data: Account;
      }
    >((data) => StudentService.studentUdUpdate(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.student.list._def,
        });
  
        toast.success("Student updated successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }

  export function useDeleteStudent(onSuccess?: () => void) {
    const { refreshQuery } = useRefreshQuery();
    const { displayErrorMessages } = useBackendErrors();
  
    return useMutation<
      void,
      ApiError,
      {
        id: number;
      }
    >((data) => StudentService.studentUdDelete(data), {
      onSuccess() {
        // invalidate all the list queries
        refreshQuery({
          // eslint-disable-next-line no-underscore-dangle
          queryKey: queryKeys.student.list._def,
        });
  
        toast.success("Deleted user successfully");
        onSuccess?.();
      },
  
      onError(err) {
        displayErrorMessages(err);
      },
    });
  }