import { ParsedUrlQuery } from "querystring";

import { SortingState } from "@tanstack/react-table";

type UpdaterFn<T> = (previousState: T) => T;

export const updateSortingState = (
  updater: UpdaterFn<SortingState>,
  searchParams: ParsedUrlQuery,
) => {
  const previousState: SortingState = [
    {
      id: searchParams.get("sortBy") || "",
      desc: searchParams.get("sortDirection") === "desc",
    },
  ];
  const newState = updater(previousState);

  if (newState.length > 0) {
    const { id, desc } = newState[0];

    searchParams.set("sortBy", id);
    searchParams.set("sortDirection", desc ? "desc" : "asc");
  } else {
    searchParams.delete("sortBy");
    searchParams.delete("sortDirection");
  }

  return newState;
};
