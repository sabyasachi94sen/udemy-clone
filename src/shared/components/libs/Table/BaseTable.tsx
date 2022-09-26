// import {
//   Column,
//   Column,
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   Table as ReactTable,
//   usePagination,
//   useReactTable,
//   useReactTable,
// } from "@tanstack/react-table";
// import React from "react";
// import {
//   HiChevronDoubleLeft,
//   HiChevronDoubleRight,
//   HiChevronLeft,
//   HiChevronRight,
// } from "react-icons/hi";

import { faker } from "@faker-js/faker";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Column } from "react-table";

// import { Button, PageButton } from "./Button";

// import "./index.css";

// import { makeData, Person } from "./makeData";

// export type TableProps = {
//   columns: Column<object>[];
//   data: object[];
//   fetchData: ({
//     pageIndex,
//     pageSize,
//   }: {
//     pageIndex: number;
//     pageSize: number;
//   }) => void;
//   loading: boolean;
//   pageCount: number;
// };

// export function Table({
//   columns,
//   data,
//   fetchData,
//   loading,
//   pageCount: controlledPageCount,
// }: TableProps): JSX.Element {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     // Get the state from the instance
//     state: { pageIndex, pageSize },
//   } = useReactTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 }, // Pass our hoisted table state
//       manualPagination: true, // Tell the usePagination
//       // hook that we'll handle our own data fetching
//       // This means we'll also have to provide our own
//       // pageCount.
//       pageCount: controlledPageCount,
//     },
//     usePagination,
//   );

//   // Listen for changes in pagination and use the state to fetch our new data
//   React.useEffect(() => {
//     fetchData({ pageIndex, pageSize });
//   }, [fetchData, pageIndex, pageSize]);

//   // to display from -- to count
//   const startIndex = pageIndex * pageSize + 1;
//   const endIndex = startIndex + (pageSize - 1);

//   // Render the UI for your table
//   return (
//     <>
//       {/* table */}
//       <div className="mt-4 flex flex-col">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
//               <table
//                 {...getTableProps()}
//                 className="min-w-full divide-y divide-gray-200"
//               >
//                 <thead className="bg-gray-50">
//                   {headerGroups.map((headerGroup) => (
//                     <tr
//                       {...headerGroup.getHeaderGroupProps()}
//                       key={headerGroup}
//                     >
//                       {headerGroup.headers.map((column) => (
//                         // Add the sorting props to control sorting. For this example
//                         // we can add them into the header props
//                         <th
//                           key={column}
//                           className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
//                           scope="col"
//                           {...column.getHeaderProps()}
//                         >
//                           <div className="flex items-center justify-between">
//                             {column.render("Header")}
//                           </div>
//                         </th>
//                       ))}
//                     </tr>
//                   ))}
//                 </thead>
//                 <tbody
//                   {...getTableBodyProps()}
//                   className="divide-y divide-gray-200 bg-white"
//                 >
//                   {page.map((row, i) => {
//                     // new
//                     prepareRow(row);

//                     return (
//                       <tr {...row.getRowProps()} key={row}>
//                         {row.cells.map((cell) => (
//                           <td
//                             {...cell.getCellProps()}
//                             key={cell}
//                             className="whitespace-nowrap px-6 py-4"
//                             role="cell"
//                           >
//                             {cell.column.Cell.name === "defaultRenderer" ? (
//                               <div className="text-sm text-gray-500">
//                                 {cell.render("Cell")}
//                               </div>
//                             ) : (
//                               cell.render("Cell")
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     );
//                   })}
//                   <tr>
//                     {loading && (
//                       // Use our custom loading state to show a loading indicator
//                       <td colSpan={10000}>Loading...</td>
//                     )}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOOTER */}
//       <div className="flex items-center justify-between py-3">
//         <div className="flex flex-1 justify-between sm:hidden">
//           <Button disabled={!canPreviousPage} onClick={() => previousPage()}>
//             Previous
//           </Button>
//           <Button disabled={!canNextPage} onClick={() => nextPage()}>
//             Next
//           </Button>
//         </div>

//         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//           {/* PAGE SIZE */}
//           <div className="flex items-baseline gap-x-2">
//             {/* <span className="text-gray-700 text-sm">
//               Page <span className="font-medium">{pageIndex + 1}</span> of{" "}
//               <span className="font-medium">{pageOptions.length}</span>
//             </span> */}
//             <div className="hidden sm:block">
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium">{startIndex}</span> to{" "}
//                 <span className="font-medium">{endIndex}</span> of{" "}
//                 <span className="font-medium">{controlledPageCount}</span>{" "}
//                 results
//               </p>
//             </div>

//             <label>
//               <span className="sr-only">Items Per Page</span>
//               <select
//                 className="form-select mt-1 block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 value={pageSize}
//                 onChange={(e) => {
//                   setPageSize(Number(e.target.value));
//                 }}
//               >
//                 {[5, 10, 20].map((size) => (
//                   <option key={size} value={size}>
//                     Show {size}
//                   </option>
//                 ))}
//               </select>
//             </label>
//           </div>

//           {/* PAGiNTATION */}
//           <div>
//             <nav
//               aria-label="Pagination"
//               className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
//             >
//               <PageButton
//                 className="rounded-l-md"
//                 disabled={!canPreviousPage}
//                 onClick={() => gotoPage(0)}
//               >
//                 <span className="sr-only">First</span>
//                 <HiChevronDoubleLeft
//                   aria-hidden="true"
//                   className="h-5 w-5 text-gray-400"
//                 />
//               </PageButton>
//               <PageButton
//                 disabled={!canPreviousPage}
//                 onClick={() => previousPage()}
//               >
//                 <span className="sr-only">Previous</span>
//                 <HiChevronLeft
//                   aria-hidden="true"
//                   className="h-5 w-5 text-gray-400"
//                 />
//               </PageButton>
//               <PageButton disabled={!canNextPage} onClick={() => nextPage()}>
//                 <span className="sr-only">Next</span>
//                 <HiChevronRight
//                   aria-hidden="true"
//                   className="h-5 w-5 text-gray-400"
//                 />
//               </PageButton>
//               <PageButton
//                 className="rounded-r-md"
//                 disabled={!canNextPage}
//                 onClick={() => gotoPage(pageCount - 1)}
//               >
//                 <span className="sr-only">Last</span>
//                 <HiChevronDoubleRight
//                   aria-hidden="true"
//                   className="h-5 w-5 text-gray-400"
//                 />
//               </PageButton>
//             </nav>
//           </div>
//           {/* PAGINATION-END */}
//         </div>
//       </div>
//       {/* FOOTER-END */}
//     </>
//   );
// }

// export function Table() {
//   const rerender = React.useReducer(() => ({}), {})[1];

//   const columns = React.useMemo<ColumnDef<Person>[]>(
//     () => [
//       {
//         header: "Name",
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: "firstName",
//             cell: (info) => info.getValue(),
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorFn: (row) => row.lastName,
//             id: "lastName",
//             cell: (info) => info.getValue(),
//             header: () => <span>Last Name</span>,
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//       {
//         header: "Info",
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: "age",
//             header: () => "Age",
//             footer: (props) => props.column.id,
//           },
//           {
//             header: "More Info",
//             columns: [
//               {
//                 accessorKey: "visits",
//                 header: () => <span>Visits</span>,
//                 footer: (props) => props.column.id,
//               },
//               {
//                 accessorKey: "status",
//                 header: "Status",
//                 footer: (props) => props.column.id,
//               },
//               {
//                 accessorKey: "progress",
//                 header: "Profile Progress",
//                 footer: (props) => props.column.id,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//     [],
//   );

//   const [data, setData] = React.useState(() => makeData(100000));
//   const refreshData = () => setData(() => makeData(100000));

//   return (
//     <>
//       <Table
//         {...{
//           data,
//           columns,
//         }}
//       />
//       <hr />
//       <div>
//         <button onClick={() => rerender()}>Force Rerender</button>
//       </div>
//       <div>
//         <button onClick={() => refreshData()}>Refresh Data</button>
//       </div>
//     </>
//   );
// }

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
};

const range = (len: number) => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
};

const newPerson = (): Person => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.datatype.number(40),
  visits: faker.datatype.number(1000),
  progress: faker.datatype.number(100),
  status: faker.helpers.shuffle<Person["status"]>([
    "relationship",
    "complicated",
    "single",
  ])[0]!,
});

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;

    return range(len).map(
      (d): Person => ({
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }),
    );
  };

  return makeDataLevel();
}

export function BaseTable({
  data,
  columns,
}: {
  data: Person[];
  columns: ColumnDef<Person>[];
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="rounded border p-1"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          {"<<"}
        </button>
        <button
          className="rounded border p-1"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {"<"}
        </button>
        <button
          className="rounded border p-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {">"}
        </button>
        <button
          className="rounded border p-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            className="w-16 rounded border p-1"
            defaultValue={table.getState().pagination.pageIndex + 1}
            type="number"
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;

              table.setPageIndex(page);
            }}
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </div>
  );
}
function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        className="w-24 rounded border shadow"
        placeholder="Min"
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
      />
      <input
        className="w-24 rounded border shadow"
        placeholder="Max"
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
      />
    </div>
  ) : (
    <input
      className="w-36 rounded border shadow"
      placeholder="Search..."
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
    />
  );
}
