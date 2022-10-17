import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { memo, useCallback, useMemo,useState } from "react";
import { FaUserEdit } from "react-icons/fa";

import { MdDeleteOutline } from "react-icons/md";

import { Account } from "@/api";
import { BaseTable, IconButton, StatusCell } from "@/shared/components";

import { formatDate } from "@/shared/utils";

interface SuperAdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
  
}

export const SuperAdminTable=(({
  onDelete,
  onUpdate,
  superAdminsQuery,
  page,
  isSearch
}: SuperAdminTableProps) => {



   console.log(isSearch)

  const columnHelper = createColumnHelper<Account>();

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: "Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: "Email",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.last_update, {
        id: "last_update",
        header: "Last update",
        cell: (info) => (info.getValue() ? <div className="pl-1">{formatDate(info.getValue())}</div> : null),
      }),
      columnHelper.accessor((row) => row.is_active, {
        id: "is_active",
        header: "Active Status",
        cell: (info) => (
          <div className="pl-3">
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <div className="pl-2">
          <IconButton
            toolTipText="Edit"
            onClick={() => {
              isSearch()
              onUpdate(info.row.original)}}
          >
            <FaUserEdit className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.id, {
        id: "delete",
        header: "Delete",
        cell: (info) => (
          <div className="pl-4">
          <IconButton
            toolTipText="Delete"
            onClick={() => {
              onDelete(info.row.original)
              isSearch()
            }}
          >
            <MdDeleteOutline className="text-xl text-neutral text-opacity-80" />
          </IconButton>
          </div>
        ),
      }),
    ],
    [],
  );



  return (
    <>

      <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={superAdminsQuery?.data}
      isLoading={superAdminsQuery.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
      totalResultsCount={superAdminsQuery.data?.count || 0}
    />
    </>
  );
})
