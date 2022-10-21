import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


import { Account } from "@/api";
import { setLocalStorage } from "@/features/helpers"
import { BaseTable , IconButton, RowNavigate, StatusCell } from "@/shared/components";

import { useStoreData } from "@/shared/stores/modal.store";
import { formatDate } from "@/shared/utils";

interface AdminTableProps {
  onDelete: (user: Account) => void;
  onUpdate: (user: Account) => void;
}

export function AdminTable({
  onDelete,
  onUpdate,
  AdminsQuery,
  page,
  isSearch
}: AdminTableProps): JSX.Element {
  

  const columnHelper = createColumnHelper<Account>();
  const router=useRouter()

  // REF: https://github.com/TanStack/table/issues/4241
  // to prevent this we're using any here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<Account, any>[]>(
    () => [
      columnHelper.accessor((row) => row.username, {
        id: "username",
        header: "Name",
        cell: (info) => (
          <RowNavigate
            rowLink={() => {
              router.push(`/admin/${info.row.original.id}`)
             setLocalStorage("adminInfo",info.row.original.id)
             setLocalStorage("adminName",info.getValue())
            }}
            rowValue={info.getValue()}
          
            
          />
        ),
      }),
      
      columnHelper.accessor((row) => row.last_login, {
        id: "last_login",
        header: "Last Login",
        cell: (info) => (info.getValue() ? <div className="pl-1">{formatDate(info.getValue())}</div> : null),
      
      }),
    
      columnHelper.accessor((row) => row.is_active, {
        id: "is_active",
        header: "Active Status",
        cell: (info) => (
          <div className="pl-2">
          <StatusCell
            rowValue={info.getValue() === true ? "Active" : "Inactive"}
            statusColor={info.getValue() === true ? "active" : "inactive"}
          />
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.student_count, {
        id: "students",
        header: "Students",
        cell: (info) => (<div className="pl-8">{info.getValue()}</div>),
      
      }),
      columnHelper.accessor((row) => row.id, {
        id: "edit",
        header: "Edit",
        cell: (info) => (
          <div className="pl-2">
          <IconButton
            toolTipText="Edit"
            onClick={() => {onUpdate(info.row.original)
               isSearch()
            }}
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
            onClick={() => {onDelete(info.row.original)
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
    <BaseTable<Account>
      columns={columns}
      currentPage={Number(page) || 1}
      data={AdminsQuery?.data}
      isLoading={AdminsQuery.isLoading}
      // totalPagesCount={10} // TODO: fix This once backend adds limit in query
      // totalResultsCount={AdminsQuery.data?.count || 0}
    />
  );
}
