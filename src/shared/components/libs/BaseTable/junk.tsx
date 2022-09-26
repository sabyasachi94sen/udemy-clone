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
//             <span className="text-gray-700 text-sm">
//               Page <span className="font-medium">{pageIndex + 1}</span> of{" "}
//               <span className="font-medium">{pageOptions.length}</span>
//             </span>
//             <div className="hidden sm:block">
//               <p className="text-sm text-gray-700">
//                 Showing <span className="font-medium">{table.startIndex}</span> to{" "}
//                 <span className="font-medium">{endIndex}</span> of{" "}
//                 <span className="font-medium">{pageCount}</span>{" "}
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

// {
//   table.getPageCount() > 1 && (
//     <div>
//       <nav
//         aria-label="Pagination"
//         className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
//       >
//         <PageButton
//           className="rounded-l-md"
//           disabled={!table.getCanPreviousPage()}
//           onClick={() => table.setPageIndex(0)}
//         >
//           <span className="sr-only">First</span>
//           <HiChevronDoubleLeft
//             aria-hidden="true"
//             className="h-5 w-5 text-gray-400"
//           />
//         </PageButton>
//         <PageButton
//           disabled={!table.getCanPreviousPage()}
//           onClick={() => table.previousPage()}
//         >
//           <span className="sr-only">Previous</span>
//           <HiChevronLeft aria-hidden="true" className="h-5 w-5 text-gray-400" />
//         </PageButton>
//         <PageButton
//           disabled={!table.getCanNextPage()}
//           onClick={() => table.nextPage()}
//         >
//           <span className="sr-only">Next</span>
//           <HiChevronRight
//             aria-hidden="true"
//             className="h-5 w-5 text-gray-400"
//           />
//         </PageButton>
//         <PageButton
//           className="rounded-r-md"
//           disabled={!table.getCanNextPage()}
//           onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//         >
//           <span className="sr-only">Last</span>
//           <HiChevronDoubleRight
//             aria-hidden="true"
//             className="h-5 w-5 text-gray-400"
//           />
//         </PageButton>
//       </nav>
//     </div>
    // <S.Pagination>
    //   <S.Pages>
    //     <Button
    //       buttonType="secondary"
    //       buttonSize="M"
    //       onClick={() => table.setPageIndex(0)}
    //       disabled={!table.getCanPreviousPage()}
    //     >
    //       ⇤
    //     </Button>
    //     <Button
    //       buttonType="secondary"
    //       buttonSize="M"
    //       onClick={() => table.previousPage()}
    //       disabled={!table.getCanPreviousPage()}
    //     >
    //       ← Previous
    //     </Button>
    //     <Button
    //       buttonType="secondary"
    //       buttonSize="M"
    //       onClick={() => table.nextPage()}
    //       disabled={!table.getCanNextPage()}
    //     >
    //       Next →
    //     </Button>
    //     <Button
    //       buttonType="secondary"
    //       buttonSize="M"
    //       onClick={() => table.setPageIndex(table.getPageCount() - 1)}
    //       disabled={!table.getCanNextPage()}
    //     >
    //       ⇥
    //     </Button>

    //     <S.GoToPage>
    //       <span>Go to page:</span>
    //       <Input
    //         type="number"
    //         positiveOnly
    //         defaultValue={table.getState().pagination.pageIndex + 1}
    //         inputSize="M"
    //         max={table.getPageCount()}
    //         min={1}
    //         onChange={({ target: { value } }) => {
    //           const index = value ? Number(value) - 1 : 0;
    //           table.setPageIndex(index);
    //         }}
    //       />
    //     </S.GoToPage>
    //   </S.Pages>
    //   <S.PageInfo>
    //     <span>
    //       Page {table.getState().pagination.pageIndex + 1} of{" "}
    //       {table.getPageCount()}{" "}
    //     </span>
    //   </S.PageInfo>
    // </S.Pagination>
  // );
}
