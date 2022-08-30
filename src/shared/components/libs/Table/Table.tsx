import React from "react";
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { useTable, usePagination, Column } from "@tanstack/react-table";

import { Button, PageButton } from "./Button";

export type TableProps = {
  columns: Column<object>[];
  data: object[];
  fetchData: ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: number;
    pageSize: number;
  }) => void;
  loading: boolean;
  pageCount: number;
};

export const Table = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}: TableProps): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  // to display from -- to count
  const startIndex = pageIndex * pageSize + 1;
  const endIndex = startIndex + (pageSize - 1);

  // Render the UI for your table
  return (
    <>
      {/* table */}
      <div className="flex flex-col mt-4">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block align-middle py-2 min-w-full sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-gray-200 divide-y"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={headerGroup}
                    >
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          key={column}
                          className="group px-6 py-3 text-left text-gray-500 text-xs font-medium tracking-wider uppercase"
                          scope="col"
                          {...column.getHeaderProps()}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-gray-200 divide-y"
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);

                    return (
                      <tr {...row.getRowProps()} key={row}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={cell}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer" ? (
                                <div className="text-gray-500 text-sm">
                                  {cell.render("Cell")}
                                </div>
                              ) : (
                                cell.render("Cell")
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  <tr>
                    {loading && (
                      // Use our custom loading state to show a loading indicator
                      <td colSpan={10000}>Loading...</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FOOOTER */}
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-1 justify-between sm:hidden">
          <Button disabled={!canPreviousPage} onClick={() => previousPage()}>
            Previous
          </Button>
          <Button disabled={!canNextPage} onClick={() => nextPage()}>
            Next
          </Button>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          {/* PAGE SIZE */}
          <div className="flex gap-x-2 items-baseline">
            {/* <span className="text-gray-700 text-sm">
              Page <span className="font-medium">{pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span> */}
            <div className="hidden sm:block">
              <p className="text-gray-700 text-sm">
                Showing <span className="font-medium">{startIndex}</span> to{" "}
                <span className="font-medium">{endIndex}</span> of{" "}
                <span className="font-medium">{controlledPageCount}</span>{" "}
                results
              </p>
            </div>

            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="form-select block mt-1 w-full text-sm border-gray-300 focus:border-indigo-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((size) => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* PAGiNTATION */}
          <div>
            <nav
              aria-label="Pagination"
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            >
              <PageButton
                className="rounded-l-md"
                disabled={!canPreviousPage}
                onClick={() => gotoPage(0)}
              >
                <span className="sr-only">First</span>
                <HiChevronDoubleLeft
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                />
              </PageButton>
              <PageButton
                disabled={!canPreviousPage}
                onClick={() => previousPage()}
              >
                <span className="sr-only">Previous</span>
                <HiChevronLeft
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                />
              </PageButton>
              <PageButton disabled={!canNextPage} onClick={() => nextPage()}>
                <span className="sr-only">Next</span>
                <HiChevronRight
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                disabled={!canNextPage}
                onClick={() => gotoPage(pageCount - 1)}
              >
                <span className="sr-only">Last</span>
                <HiChevronDoubleRight
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                />
              </PageButton>
            </nav>
          </div>
          {/* PAGINATION-END */}
        </div>
      </div>
      {/* FOOTER-END */}
    </>
  );
};
