import { ParsedUrlQuery } from "querystring";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

import { PER_PAGE } from "@/shared/utils";

import { Pagination } from "./Pagination";
import { updatePaginationState } from "./update-pagination-state";

export interface BaseTableProps<TData> {
  data: TData[];
  totalResultsCount: number;
  totalPagesCount: number;
  columns: ColumnDef<TData, unknown>[];
  isLoading?: boolean;

  // Server-side processing: sorting, pagination
  serverSideProcessing?: boolean;

  // Sorting.
  enableSorting?: boolean; // Enables sorting for table.

  // Placeholder for empty table
  emptyMessage?: string;
}

type UpdaterFn<T> = (previousState: T) => T;

/**
 * Table component that uses the react-table library to render a table.
 * https://tanstack.com/table/v8
 *
 * The most important props are:
 *  - `data`: the data to render in the table
 *  - `columns`: ColumnsDef. You can finde more info about it on https://tanstack.com/table/v8/docs/guide/column-defs
 *  - `emptyMessage`: the message to show when there is no data to render
 *
 * Usecases:
 * 1. Sortable table
 *    - set `enableSorting` property of component to true. It will enable sorting for all columns.
 *      If you want to disable sorting for some particular columns you can pass
 *     `enableSorting = false` to the column def.
 *    - table component stores the sorting state in URLSearchParams. Use `sortBy` and `sortDirection`
 *      search param to set default sortings.
 *    - use `id` property of the column def to set the sortBy for server side sorting.
 *
 * 2. Pagination
 *    - pagination enabled by default.
 *    - use `perPage` search param to manage default page size.
 *    - use `page` search param to manage default page index.
 *    - use `pageCount` prop to set the total number of pages only in case of server side processing.
 *
 * 3. Expandable rows
 *    - use `getRowCanExpand` prop to set a function that returns true if the row can be expanded.
 *    - use `renderSubComponent` prop to provide a sub component for each expanded row.
 *
 * 4. Row selection
 *    - use `enableRowSelection` prop to enable row selection. This prop can be a boolean or
 *      a function that returns true if the particular row can be selected.
 *    - use `batchActionsBar` prop to provide a component that will be rendered at the top of the table
 *      when row selection is enabled and there are selected rows.
 *
 * 5. Server side processing:
 *    - set `serverSideProcessing` to true
 *    - set `pageCount` to the total number of pages
 *    - use URLSearchParams to get the pagination and sorting state from the url for your server side processing.
 */

export function BaseTable<T>({
  data,
  totalResultsCount,
  totalPagesCount,
  columns,
  serverSideProcessing = true,
  enableSorting = false,
  emptyMessage,
  isLoading,
}: BaseTableProps<T>) {
  const router = useRouter();
  const getPaginationFromSearchParams = (searchParams: ParsedUrlQuery) => {
    const { page, perPage } = searchParams;
    const pageIndex = page ? Number(page) - 1 : 0;

    return {
      page,
      pageIndex,
      pageSize: Number(perPage || PER_PAGE),
    };
  };

  const onPaginationChange = useCallback(
    (updater: UpdaterFn<PaginationState>) => {
      const newState = updatePaginationState(updater, router.query);

      router.push({
        query: { page: newState.page, perPage: newState.perPage },
      });

      return newState;
    },
    [router],
  );

  const table = useReactTable({
    data,
    pageCount: totalPagesCount,
    columns,
    state: {
      pagination: getPaginationFromSearchParams(router.query),
    },
    onPaginationChange: onPaginationChange as OnChangeFn<PaginationState>,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualSorting: serverSideProcessing,
    manualPagination: serverSideProcessing,
    enableSorting,
    autoResetPageIndex: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="max-h-[80vh] overflow-scroll border-b border-gray-200 shadow sm:rounded-lg">
            <table className="relative  min-w-full divide-y divide-gray-200 overflow-x-scroll">
              <thead className="bg-gray-100">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="group sticky top-0 z-10 bg-gray-100 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        scope="col"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody className="w-full divide-y divide-gray-200 bg-white">
                {!isLoading &&
                  table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row
                        .getVisibleCells()
                        .map(({ id, getContext, column: { columnDef } }) => (
                          <td key={id} style={columnDef.meta}>
                            {flexRender(columnDef.cell, getContext())}
                          </td>
                        ))}
                    </tr>
                  ))}

                {/* {table.getRowModel().rows.length === 0 && (
                  <div>{emptyMessage || "No rows found"}</div>
                )} */}
              </tbody>
            </table>
            {/* Only show pagination, when there's more than one page */}
            {totalPagesCount > 1 && (
              <Pagination
                canGoToNextPage={table.getCanNextPage()}
                canGoToPreviousPage={table.getCanPreviousPage()}
                currentPage={table.getState().pagination.pageIndex + 1}
                totalPagesCount={table.getPageCount()}
                totalResultsCount={totalResultsCount}
                onGoToNextPage={() => table.nextPage()}
                onGoToPreviousPage={() => table.previousPage()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
