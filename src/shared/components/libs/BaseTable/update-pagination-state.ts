import { ParsedUrlQuery } from "querystring";

import { PaginationState } from "@tanstack/react-table";

import { PER_PAGE } from "@/shared/utils/constants";

type UpdaterFn<T> = (previousState: T) => T;

export const updatePaginationState = (
  updater: UpdaterFn<PaginationState>,
  searchParams: ParsedUrlQuery,
) => {
  const { page, perPage } = searchParams;
  // const page = searchParams. searchParams?.get("page");
  const previousState: PaginationState = {
    // Page number starts at 1, but the pageIndex starts at 0
    pageIndex: page ? Number(page) - 1 : 0,
    pageSize: Number(perPage || PER_PAGE),
  };

  const newState = updater(previousState);

  // searchParams.page = String(newState.pageIndex + 1);
  // searchParams.perPage = newState.pageSize.toString();

  // searchParams.set("page", String(newState.pageIndex + 1));
  // searchParams.set("perPage", newState.pageSize.toString());

  return {
    ...newState,
    page: newState.pageIndex + 1,
    perPage: newState.pageSize,
  };
};
