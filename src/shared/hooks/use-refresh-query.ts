// invalidates the query from the react-query cache

import {
  InvalidateOptions,
  InvalidateQueryFilters,
  useQueryClient,
} from "@tanstack/react-query";

export const useRefreshQuery = () => {
  const queryClient = useQueryClient();

  const refreshQuery = (
    filters?: InvalidateQueryFilters<unknown> | undefined,
    options?: InvalidateOptions | undefined,
  ) => queryClient.invalidateQueries(filters, options);

  return { refreshQuery };
};
